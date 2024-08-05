# Installation

Use one of these methods:

## Homebrew

git-random is available on Homebrew. Run

```shell
brew install olets/tap/git-random
```

## With a shell plugin manager

### zsh

zsh users can install git-random with a zsh plugin manager. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

```shell
exec zsh
```

### Others

Users of shells **other than zsh** may be able to install git-random as a plugin. Check your plugin manager's documentation for support for installing commands.

## Manual

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
