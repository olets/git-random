# Options

- **intermediary-commit**

    By default, `git-random` offloads generation of the random strings used in its file names and file content to `git-commit`. The implementation leaves dangling commits until Git's garbage collection removes them (by default, Git runs this automatically), and adds entries to the reflog.

    To opt of this, pass the option `--intermediary-commit=false`. File contents and names will still be random, though with a nominal higher chance of not being unique within the repo.

    You can make `--intermediary-commit=false` the default behavior by changing Git's `random.intermediaryCommit` config:

    ```shell
    git config random.intermediaryCommit false
    ```

    With that configuration change, you can still opt into the default behavior on a per-run basis by passing `--intermediary-commit=true`.
