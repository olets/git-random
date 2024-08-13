
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

Generates a random string `<random string>`, creates a file named `<random string>.txt` (unless it already exists), and appends `<random string>` to the file on a new line.

It reads like this:

```shell
% git random
git-random: Adding the line Hlx4HQnzciwKvNl77mz3F8M5esx8lotc to the new file Hlx4HQnzciwKvNl77mz3F8M5esx8lotc.txt, and committing the change.
[my-branch 7a41c89] Created the file Hlx4HQn….txt
 1 file changed, 1 insertion(+)
 create mode 100644 Hlx4HQnzciwKvNl77mz3F8M5esx8lotc.txt
```

It is safe to have staged and unstaged changes before running `git random`. Staged changes will be automatically stashed and reapplied. That reads like this:

```shell {8-16,18-19,26,28-36}
% git status
On branch my-branch
nothing to commit, working tree clean
% touch my-new-file
% git add my-new-file
% echo new-line >> my-existing-file
% git status
On branch my-branch
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   my-new-file

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   my-existing-file
% git random
git-random: stashing your staged changes.
Saved working directory and index state # …snip

git-random: Adding the line Hlx4HQnzciwKvNl77mz3F8M5esx8lotc to the new file Hlx4HQnzciwKvNl77mz3F8M5esx8lotc.txt, and committing the change.
[my-branch 7a41c89] Created the file Hlx4HQn….txt
 1 file changed, 1 insertion(+)
 create mode 100644 Hlx4HQnzciwKvNl77mz3F8M5esx8lotc.txt

git-random: applying stashed staged changes.
% git status
On branch my-branch
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   my-new-file

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   my-existing-file
```

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

For an example of why you might want to do that, see [Examples > Practice conflict Resolution](/examples/practice-conflict-resolution)

## Show the manpage

```
git random (help | --help)
```

## Show the current version

```
git random (--version | -v)
```
