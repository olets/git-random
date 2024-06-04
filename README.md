# git-random ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-random) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-random/latest)

**git-random**: build random-content Git trees quickly. An aid for learning and experimenting with Git.

Say you want to try some Git commands on this scenario:

```
a < b < c(branch-a)
  \
    d < e(branch-b)
```

Get there with

```shell
git switch -c branch-a
git random 2 # creates commits b and c
git switch -c branch-b @~2
git random 2 # creates commits d and e
```

&nbsp;

## Installation

Use one of these methods:

### Homebrew

git-random is available on Homebrew. Run

```shell
brew install olets/tap/git-random
```

### With a shell plugin manager

#### zsh

zsh users can install git-random with a zsh plugin manager. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

```shell
exec zsh
```

#### Others

Users of shells **other than zsh** may be able to install git-random as a plugin. Check your plugin manager's documentation for support for installing commands.

### Manual

1. Download [the latest `git-random` binary](https://github.com/olets/git-random/releases/latest) or clone the [repo](https://github.com/olets/git-random).
1. Add the `git-random` directory to your path. The below examples suppose the `git-random` directory is at `~/git-random`— _**modify that to use the real location**_
    ```shell
    # .bashrc
    PATH=~/git-random:"$PATH"

    # .zshrc
    PATH=~/git-random:$PATH

    # ~/.config/fish/config.fish
    fish_add_path ~/git-random
    ```

## Usage

```shell
git random [(\<count\> | --count=\<count\>)]
    [(--modify | --modify=\<refname\>)]
    [--intermediary-commit=(true | false)]
git random (help | --help)
git random (--version | -v)
```

### Create a random-content commit

```shell
git random
```

It is safe to have staged and unstaged changes before running `git random`. Staged changes will be automatically stashed and reapplied.

### Create multiple random-content commits

```shell
git random <count> # e.g. `git random 3`
```

and

```shell
git random --count=<count> # e.g. `git random --count=3`
```

are equivalent to each other, and to running `git random` repeatedly.

### Create a commit which modifies a file modified in another specified commit

Especially useful for setting up conflict scenarios.

To add a line of random content to the last file listed in `HEAD`'s `git-log`, run

```shell
git random --modify
```

To add a line of random content to the last file listed in `refname`'s `git-log`, run

```shell
git random --modify=<refname>
# e.g. `git random --modify=HEAD`
# or `git random --modify=@~`
# or `git random --modify=my-branch`
# or `git random --modify=my-tag`
# or `git random --modify=mysha`
# etc.
```

### Show the manpage

```
git random (help | --help)
```

### Show the current version

```
git random (--version | -v)
```

## Options

By default, `git-random` offloads generation of the random strings used in its file names and file content to `git-commit`. The implementation leaves dangling commits until Git's garbage collection removes them (by default, Git runs this automatically), and adds entries to the reflog.

To opt of this, pass the option `--intermediary-commit=false`. IDs will still be random, though with a nominal higher chance of not being unique within the repo.

You can make `--intermediary-commit=false` the default behavior by changing Git's `random.intermediaryCommit` config:

```shell
git config random.intermediaryCommit false
```

With that configuration change, you can still opt into the default behavior on a per-run basis by passing `--intermediary-commit=true`.

## Examples

I keep a dedicated Git repo for experiments and demos

```shell
% git init gitscratchpad

% git commit --allow-empty -m "initial (empty)"
```

and switch to it as needed

```shell
# "Does `git rebase --onto` without specifying a `<branch>` work the way I think does?"
% cd ../gitscratchpad
# hack hack hack
% cd -
```

### Practice rebasing

```shell
# Build out the scenario
# This is the part git-random simplifies
% git switch -c upstream # https://git-scm.com/docs/git-switch#Documentation/git-switch.txt--cltnew-branchgt
% git random
% git switch -c newbase
% git random
% git switch -
% git random
% git switch -c branch
% git random
```

That built this tree (visualized here with `git log --graph --pretty=format:'%h -%d %s%n' --abbrev-commit --branches`)

```
* 056196f - (HEAD -> branch) Created the file GooICwu….txt
|
* 7590c44 - (upstream) Created the file P71Ju20….txt
|
| * 6fe654b - (newbase) Created the file EoQ4uX9….txt
|/
|
* d32c37f - Created the file G38cUNW….txt
```

Now rebase:

```shell
# Try the command
% git rebase --onto newbase upstream
```

Now the tree is (visualized here with `git log --graph --pretty=format:'%h -%d %s%n' --abbrev-commit --branches`)

```
* 08a0a94 - (HEAD -> branch) Created the file GooICwu….txt
|
* 6fe654b - (newbase) Created the file EoQ4uX9….txt
|
| * 7590c44 - (upstream) Created the file P71Ju20….txt
|/
|
* d32c37f -  Created the file G38cUNW….txt
```

### Practice conflict resolution

```shell
# Build out the scenario
# This is the part git-random simplifies
git switch -c conflict/a # https://git-scm.com/docs/git-switch#Documentation/git-switch.txt--cltnew-branchgt
git random
git random --modify
git switch -c conflict/b
git random
git random --modify=@~ # https://git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emem,
                       # https://git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltrevgtltngtemegemHEADmaster3em
```

That built this tree (visualized here with `git log --graph --pretty=format:'%h -%d %s%n' --abbrev-commit --branches`)

```
* 9c55d65 - (HEAD -> conflict/b) Modified the file N4BEpKZ….txt (EfGWDRE…)
|
* d214fa7 - Created the file wDk1GHF….txt
|
| * 8b0bd3f - (conflict/a) Modified the file N4BEpKZ….txt (1jNs9nJ…)
|/
|
* 5d3c77c - Created the file N4BEpKZ….txt
```

Notice that `conflict/a` and `conflict/b` both modified the txt file starting with N4BEpKZ.

Now rebase.

```shell
# Try choosing "ours"
% git switch -c conflict/b-pick-ours
% git rebase conflict/a
# snip
CONFLICT (content): Merge conflict in N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
# snip
% git status
# snip
  both modified:   N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
# snip
% git checkout --ours -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt # https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---ours
% git add N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
% git rebase --continue
# snip

# Try choosing "theirs"
% git switch -c conflict/b-pick-theirs conflict/b # https://git-scm.com/docs/git-switch#Documentation/git-switch.txt-ltstart-pointgt
% git rebase conflict/a
# snip
CONFLICT (content): Merge conflict in N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
# snip
% git status
# snip
  both modified:   N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
# snip
% git checkout --theirs -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt # https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---theirs
% git add N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
% git rebase --continue
# snip

% git diff conflict/a..conflict/b -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
-1jNs9nJ30JzQ8pS0SBJnuofMfw9xHYj7
+EfGWDREQ20sXj3oFZa4O2o2BOTRv33RI

% git diff conflict/b..conflict/b-pick-ours -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
-EfGWDREQ20sXj3oFZa4O2o2BOTRv33RI
+1jNs9nJ30JzQ8pS0SBJnuofMfw9xHYj7

% git diff conflict/b..conflict/b-pick-theirs -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
# no output
```

## Changelog

See the [CHANGELOG](CHANGELOG.md) file.

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/git-random/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Acknowledgments

Inspired by seeing Lorna Jane Mitchell do something similar in her talk ["Advanced GIT for Developers"](https://www.youtube.com/watch?v=duqBHik7nRo). I realized much later that she was using Matthew J. McCullough's [generaterandomchanges](https://github.com/matthewmccullough/scripts/blob/master/generaterandomchanges).

## License

<a href="https://www.github.com/olets/git-random">git-random</a> by <a href="https://www.github.com/olets">Henry Bley-Vroman</a> is licensed under a license which is the unmodified text of <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> and the unmodified text of a <a href="https://firstdonoharm.dev/build?modules=eco,extr,media,mil,sv,usta">Hippocratic License 3</a>. It is not affiliated with Creative Commons or the Organization for Ethical Source.

Human-readable summary of (and not a substitute for) the [LICENSE](LICENSE) file:

You are free to

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- Non-commercial — You may not use the material for commercial purposes.
- Ethics - You must abide by the ethical standards specified in the Hippocratic License 3 with Ecocide, Extractive Industries, US Tariff Act, Mass Surveillance, Military Activities, and Media modules.
- Preserve terms — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
