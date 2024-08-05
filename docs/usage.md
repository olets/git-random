
# Usage

```shell
git random [(\<count\> | --count=\<count\>)]
    [(--modify | --modify=\<refname\>)]
    [--intermediary-commit=(true | false)]
git random (help | --help)
git random (--version | -v)
```

## Make a commit

```shell
git random
```

It is safe to have staged and unstaged changes before running `git random`. Staged changes will be automatically stashed and reapplied.

## Make multiple commits

```shell
git random <count> # e.g. `git random 3`
```

and

```shell
git random --count=<count> # e.g. `git random --count=3`
```

are equivalent to each other, and to running `git random` repeatedly.

## Commits which modify others

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

## Show the manpage

```
git random (help | --help)
```

## Show the current version

```
git random (--version | -v)
```
