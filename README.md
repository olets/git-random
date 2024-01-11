# git-random ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-random) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-random/latest)

**git-random** is a tool for helping with Git experiments. Build commit history quickly by creating and committing a randomly-named file.

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

Generate one random commit:

```shell
git random
```

Generate multiple random commits:

```shell
git random <count> # e.g. `git random 3`
```

Show the manpage:

```
git random (help | --help)
```

Show the current version:

```
git random (--version | -v)
```

<!-- ## Changelog

See the [CHANGELOG](CHANGELOG.md) file. -->

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
