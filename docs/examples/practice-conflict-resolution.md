# Practice conflict resolution

<!-- survives? -->

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
git random
git switch -c conflict/a
git random
git random --modify
git switch -c conflict/b @~
git random
git random --modify=conflict/a
```

That built this tree[^1]

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

Notice that `conflict/a` and `conflict/b` both modified the txt file the name of which starts with "N4BEpKZ".

If you try to rebase `conflict/b` with `conflict/a`

```shell
% git rebase conflict/a
```

there will be a conflict, ready for you to resolve.

## References

- [`git switch -c <newbranch>`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt--cltnew-branchgt)
- [`git checkout --ours`](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---ours)
- [`git switch -c <newbranch> <startpoint>`](https://git-scm.com/docs/git-switch#Documentation/git-switch.txt-ltstart-pointgt)
- [`git checkout --theirs`](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt---theirs)
- [`git diff <commit>...<commit>`](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203-1).

&nbsp;

&nbsp;

[^1]: Tree visualization generated with

    ```shell
    git log --graph --pretty=format:'%d %s' --branches
    ```