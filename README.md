# git-random ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-random) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-random/latest)

**git-random** is a tool for helping with Git experiments. Build commit history quickly by creating and committing randomly-named files.

Say you want to try some Git commands on this scenario:

```
• < • < •(A)
  \
    • < •(B)
```

Get there with

```shell
git switch -c A
git random 2
git switch -c B @~2
git random 2
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

### One commit

```shell
git random
```

Example output (the final three lines are Git logging the results of the `git commit`)

```
% git random
git-random: Adding the line K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3 to the file K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3.txt and committing the change.
[main 918f55b] Random commit (K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3)
 1 file changed, 1 insertion(+)
 create mode 100644 K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3.txt

%
```

It is safe to have staged changes before running `git random`

```shell
% git status
On branch main
nothing to commit, working tree clean

% touch a-new-file

% git add a-new-file

% git random
git-random: stashing your staged changes.
Saved working directory and index state WIP on main: 55b918f Random commit (K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3)

git-random: Adding the line K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3 to the file K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3.txt and committing the change.
[main bf92f4b] Random commit (K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3)
 1 file changed, 1 insertion(+)
 create mode 100644 K94gQshXDNsx4ZZfSnDiE0ZftoCivFQ3.txt

git-random: reinstating stashed staged changes.

% git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   a-new-file

%
```

### Multiple commits

```shell
git random <count> # e.g. `git random 3`
```

### Show the manpage

```
git random (help | --help)
```

### Show the current version

```
git random (--version | -v)
```

## Example

I keep a dedicated Git repo for experiments and demos

```shell
% git init gitscratchpad

% git commit --allow-empty -m "initial (empty)"
```

and switch to it as needed

```shell
# "Does `git rebase --onto` without specifying a `<branch>` work the way I think does?"
% cd ../gitscratchpad

% git switch -c upstream

% git random

% git switch -c newbase

% git random

% git switch -

% git random

% git switch -c branch

% git random

% git log --graph --pretty=format:'%h -%d %s%n' --abbrev-commit --branches
* 056196f - (HEAD -> branch) Random commit (GooICwudCQ8u9ViE9F2CgVD7af91xsFo)
|
* 7590c44 - (upstream) Random commit (P71Ju20c6lZBafQFjR5wzN10OpOAHxHS)
|
| * 6fe654b - (newbase) Random commit (EoQ4uX9bNlOcvIsdBV5ZTLLOMQOEGh17)
|/
|
* d32c37f - Random commit (G38cUNWk9aToTZlIrxssNYP63KqqAnmC)

% git rebase --onto newbase upstream

% git log --graph --pretty=format:'%h -%d %s%n' --abbrev-commit --branches
* 08a0a94 - (HEAD -> branch) Random commit (GooICwudCQ8u9ViE9F2CgVD7af91xsFo)
|
* 6fe654b - (newbase) Random commit (EoQ4uX9bNlOcvIsdBV5ZTLLOMQOEGh17)
|
| * 7590c44 - (upstream) Random commit (P71Ju20c6lZBafQFjR5wzN10OpOAHxHS)
|/
|
* d32c37f -  Random commit (G38cUNWk9aToTZlIrxssNYP63KqqAnmC)
# "Yes. Okay back to work"

% cd -
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
