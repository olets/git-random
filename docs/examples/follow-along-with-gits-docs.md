# Follow along with Git's docs

You can use `git-random` to quickly build out the scenarios in Git's documentation. Instead of only reading, try them out yourself.

For example, the [latest `git-rebase` documentation as of this writing](https://git-scm.com/docs/git-rebase/2.45.2) presents the following scenarios:

1. In the [Description](https://git-scm.com/docs/git-rebase/2.45.2#_description) section:

    ```
              A---B---C topic*
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

1. In the [Description](https://git-scm.com/docs/git-rebase/2.45.2#_description) section:

    ```
              A---B---C topic
            /
        D---E---A'---F master
    ```

    Here's one way to get there

    ```shell
    git switch -c master
    git random 2            # D, E
    git switch -c topic
    git random 3            # A, B, C
    git switch master
    git cherry-pick topic~2 # A'
    git random              # F
    ```

1. In the [Description](https://git-scm.com/docs/git-rebase/2.45.2#_description) section:

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

1. In the [Description](https://git-scm.com/docs/git-rebase/2.45.2#_description) section:

    ```
                                H---I---J topicB
                              /
                      E---F---G  topicA
                    /
        A---B---C---D  master
    ```

    Here's one way to get there

    ```shell
    git switch -c master
    git random 4         # A, B, C, D
    git switch -c topicA
    git random 3         # E, F, G
    git switch -c topicB
    git random 3         # H, I, J
    ```

1. In the [Description](https://git-scm.com/docs/git-rebase/2.45.2#_description) section:

    ```
        E---F---G---H---I---J  topicA
    ```

    Here's one way to get there

    ```shell
    git switch -c topicA
    git random 6
    ```

1. In the [Interactive Mode](https://git-scm.com/docs/git-rebase/2.45.2#_interactive_mode) section:

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

1. In the [Recovering from upstream rebase](https://git-scm.com/docs/git-rebase/2.45.2#_recovering_from_upstream_rebase) section:

    ```
        o---o---o---o---o---o---o---o  master
              \
                o---o---o---o---o  subsystem
                                  \
                                    *---*---*  topic
    ```

    Here's one way to get there

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

1. In the [Rebasing merges](https://git-scm.com/docs/git-rebase/2.45.2#_rebasing_merges) section:

    (cleaned up a little)

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

    To get there realistically,

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
