# Practice rebasing

> [!TIP]
> I keep a dedicated Git repo for experiments and demos
> 
> ```shell
> % cd ~/Sites
> % git init gitscratchpad
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

Build out the scenario. This is the part git-random simplifies.

```shell
% git switch main
% git random
% git switch -c feature
% git random
% git switch main
% git random
```

That built a tree with the same shape as this one [^1]

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

## References

- [`git switch -c <newbranch>`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt--cltnew-branchgt)
- [`git rebase --onto <newbase>`](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203-1)
- [`git-rebase`'s `<upstream>`](https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt-ltupstreamgt).

&nbsp;

&nbsp;

[^1]: Tree visualization generated with

    ```shell
    git log --graph --pretty=format:'%d' --branches
    ```