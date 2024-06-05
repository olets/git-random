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

&nbsp;

&nbsp;

&nbsp;

## Examples

> [!TIP]
> I keep a dedicated Git repo for experiments and demos
> 
> ```shell
> % git init gitscratchpad
> 
> % git commit --allow-empty -m "initial (empty)"
> ```
> 
> and switch to it as needed
> 
> ```shell
> # "Does `git rebase --onto` without specifying a `<branch>` work the way I think does?"
> % cd ../gitscratchpad
> # hack hack hack
> % cd -
> ```

### Practice rebasing

Build out the scenario. This is the part git-random simplifies.

This example uses [`git switch -c <newbranch>`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt--cltnew-branchgt), [`git rebase --onto <newbase>`](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203-1), and [`git-rebase`'s `<upstream>`](https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt-ltupstreamgt).

```shell
% git switch main
% git random
% git switch -c feature
% git random
% git switch main
% git random
```

That built a tree with the same shape as this one [^*]

```
* 056196f (HEAD -> main)
|
| * (feature)
|/
|
*
```

Now try out the rebase:

```shell
% git switch feature
% git rebase main
```

### Practice conflict resolution

Build out the scenario. This is the part git-random simplifies.

This example uses [`git switch -c <newbranch>`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt--cltnew-branchgt), [`git checkout --ours`](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---ours), [`git switch -c <newbranch> <startpoint>`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt-ltstart-pointgt), [`git checkout --theirs`](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---theirs), and [`git diff <commit>...<commit>`](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203-1).

```shell
git random
git switch -c conflict/a
git random
git random --modify
git switch -c conflict/b @~
git random
git random --modify=conflict/a
```

That built this tree[^*]

```
* (HEAD -> conflict/b) Modified the file N4BEpKZ….txt (EfGWDRE…)
|
* Created the file wDk1GHF….txt
|
| * (conflict/a) Modified the file N4BEpKZ….txt (1jNs9nJ…)
|/
|
* Created the file N4BEpKZ….txt
```

Notice that `conflict/a` and `conflict/b` both modified the txt file starting with N4BEpKZ.

If you try to rebase `conflict/b` with `conflict/a`

```shell
% git rebase conflict/a
```

there will be a conflict. Try choosing "ours"

```shell
% git checkout --ours -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
% git add N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
% git rebase --continue
```

or "theirs"

```shell
% git checkout --theirs -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
% git add N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
% git rebase --continue
```

and check the difference

```shell
% git diff conflict/a..conflict/b -- N4BEpKZ5lf4XpefeSocngTl4mYi4uwUA.txt
```

### Follow along with Git's documentation

You can use `git-random` to quicly build out the scenarios in Git's documentation. Instead of only reading, try them out yourself.

For example, the [latest `git-rebase` documentation as of this writing](https://git-scm.com/docs/git-rebase/2.45.2) presents the following scenarios:

1.
    ```
              A---B---C topic
            /
        D---E---F---G master
    ```

    As I picture it, the scenario supposes something like this happened:

    ```shell
    git switch -c master
    git random 2         # D, E
    git switch -c topic
    git random 3         # A, B, C
    git switch master
    git random 2         # F, G
    git checkout topic
    ```

    though you could build the same tree more succinctly with

    ```shell
    git switch -c master
    git random 4         # D, E, F, G
    git switch -c topic @~2
    git random 3         # A, B, C
    ```

1.
    ```
              A---B---C topic
            /
        D---E---A'---F master
    ```

    ```shell
    git switch -c master
    git random 2            # D, E
    git switch -c topic
    git random 3            # A, B, C
    git switch master
    git cherry-pick topic~2 # A'
    git random              # F
    ```

1.
    ```
        o---o---o---o---o  master
            \
              o---o---o---o---o  next
                              \
                                o---o---o  topic
    ```

    Here's one way to get there

    ```shell
    git switch -c master
    git random 2
    git branch next
    git random 5
    git switch -c topic
    git random 3
    git switch master
    git random 3
    ```

    or use it as an opportunity to practice relative refs:

    ```shell
    git switch -c master
    git random 5
    git switch -c topic @~3
    git random 8
    git branch next @~3
    ```

1.
    ```
                                H---I---J topicB
                              /
                      E---F---G  topicA
                    /
        A---B---C---D  master
    ```

    ```shell
    git switch -c master
    git random 4         # A, B, C, D
    git switch -c topicA
    git random 3         # E, F, G
    git switch -c topicB
    git random 3         # H, I, J
    ```

1.
    ```
        E---F---G---H---I---J  topicA
    ```

    ```shell
    git switch -c topicA
    git random 6
    ```

1.
    ```
              X
                \
            A---M---B
            /
    ---o---O---P---Q
    ```

    The `X` merge makes things tricky, but with [`git switch --orphan`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt---orphanltnew-branchgt) and [`git merge --unrelated-histories`](https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---allow-unrelated-histories) it can be done.

    ```shell
    git switch -c O
    git random 2    # o, O
    git switch -c Q
    git random 2    # P, Q
    git switch --orphan X
    git random      # X
    git switch O
    git random      # A
    git merge --no-ff --allow-unrelated-histories X # M
    git random      # B
    ```

1.
    ```
        o---o---o---o---o---o---o---o  master
              \
                o---o---o---o---o  subsystem
                                  \
                                    *---*---*  topic
    ```

    ```shell
    git switch -c master
    git random 2
    git switch -c subsystem
    git random 5
    git switch -c topic
    git random 3
    git switch master
    git random 6
    ```

    To get to this example's "hard case",

    ```shell
    git random --modify=subsystem
    ```

    to add a commit to `master` which will make rebasing `subsystem` require conflict resolution.

1. (cleaned up a little)

    ```
    *   (HEAD -> main)
    |\
    | * (refactor-button)
    * |
    |\ \
    | |/
    | *
    | *
    |/  # added
    *   # added
    ```

    To get there realistically and without shorthands,

    ```shell
    git switch main
    git random
    git switch -c refactor-button
    git random 2
    git switch main
    git merge --no-ff refactor-button
    git switch refactor-button
    git random
    git switch main
    git merge --no-ff refactor-button
    ```

    or rush there (not familiar with `@{-1}`? Read my article [Committed to the wrong branch? -, @{upstream}, and @{-1} to the rescue](https://www.olets.dev/posts/committed-to-the-wrong-branch-upstream-and-to-the-rescue/).)

    ```shell
    git switch main
    git random
    git switch -c refactor-button
    git random 3
    git switch -
    git merge --no-ff @{-1}~
    git merge --no-ff @{-1}
    ```

&nbsp;

&nbsp;

&nbsp;

## Changelog

See the [CHANGELOG](CHANGELOG.md) file.

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/git-random/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Acknowledgments

Inspired by seeing Lorna Jane Mitchell use Matthew J. McCullough's [generaterandomchanges](https://github.com/matthewmccullough/scripts/blob/master/generaterandomchanges) in her talk ["Advanced GIT for Developers"](https://www.youtube.com/watch?v=duqBHik7nRo).

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

[^*]: Tree visualizations with branch names only were generated with
    ```shell
    git log --graph --pretty=format:'%d' --branches
    ```
    Those with branch names and commit messages were generated with
    ```shell
    git log --graph --pretty=format:'%d %s' --branches
    ```
