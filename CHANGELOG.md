## [2.0.1](https://github.com/olets/git-random/compare/v2.0.0...v2.0.1) (2024-09-23)


### Bug Fixes

* **commit:** create directory if it does not exist ([a0a4c1d](https://github.com/olets/git-random/commit/a0a4c1d5dcb108d1cc873bd369199efa10489acf))
* **commit:** do not follow 'touch' alias ([bcbaac6](https://github.com/olets/git-random/commit/bcbaac6c96bbd7762f39ea68ba3405439419b7a7))
* **commit:** no success logs if not successful ([3215644](https://github.com/olets/git-random/commit/32156448e991c9b5f4b6c23360f4eeb61dc82839))


### Features

#### Docs

* **codeblocks:** use the high-contrast themes shipped with shiki ([1a31d5d](https://github.com/olets/git-random/commit/1a31d5d920dbd9fe050f60f963bf0ef1ae57f71b))
* **vitepress:** upgrade to 1.3.3 ([8c9841e](https://github.com/olets/git-random/commit/8c9841e85f7af8bd2a0acc2958bbd0e5fdaafb38))



# [2.0.0](https://github.com/olets/git-random/compare/v1.1.0...v2.0.0) (2024-08-12)

1. The Git message header names the created file, abbreviated. The full file name is given in the Git message body.
1. New `<count>` option and `--count` flag. Create multiple commits in one go.
1. New `--modify` flag. Modify an existing commit.
    - Git message header names the modified file and the added line, both abbreviated. The full added line is given in the Git message body.
    - When combined with `<count>` or `--count`, all the new commits modify the same commit.
1. Random strings are generated by Git, making them very likely to be unique per repo. This adds noise to the reflog. New `--intermediary-commit` flag opts out of the new behavior.
1. Vitepress docs site.


# [v1.1.0](https://github.com/olets/git-random/compare/v1.0.1...v1.1.0) (2024-06-03)

### Features

* **ci:** do not bump homebrew on github prereleases ([db2e826](https://github.com/olets/git-random/commit/db2e8266d622c7bee6438d097f304b5d44ff68ca))



# [v1.0.1](https://github.com/olets/git-random/compare/v1.0.0...v1.0.1) (2024-01-11)

- Polishes output ([b559a57](https://github.com/olets/git-random/commit/b559a57f1ef4b47f1bc69132542da4d1f46adfe6))
- Updates docs



# [v1.0.0](https://github.com/olets/git-random/compare/v1.0.0-beta.2) (2024-01-10)


### Features

* **homebrew:** update formula on github release publication ([7118c96](https://github.com/olets/git-random/commit/7118c96b61834e7a243e046c78c3ef82ab2ed629))



# [v1.0.0-beta.2](https://github.com/olets/git-random/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2024-01-10)


### Features

* **command:** restrict allowed arguments ([2f4100a](https://github.com/olets/git-random/commit/2f4100a423e2fcd7c965cd76d7196c37633a9971))
* **forks:** use builtin and command ([44572bf](https://github.com/olets/git-random/commit/44572bfa0c180a35f71055afa8dcfea2f249a214))
* **help:** support subcommand ([9b3e50c](https://github.com/olets/git-random/commit/9b3e50c4b82f9cbf748660fc5ba29371fd2581a6))
* **homebrew:** update formula on github release publication ([7118c96](https://github.com/olets/git-random/commit/7118c96b61834e7a243e046c78c3ef82ab2ed629))
* **manpage:** add ([3c2aed2](https://github.com/olets/git-random/commit/3c2aed2a476fab2acc7920a22d7ac3c7a38dad5e))
* **script:** if staged files, stash before committing and pop after ([b332543](https://github.com/olets/git-random/commit/b332543231792b35813cc958f21268968c1f9dd3))
* **script:** support multiple commits in one command ([59aa7ba](https://github.com/olets/git-random/commit/59aa7baf08f980bd4bbe2e3a63e05a1034fa4088))
* **version:** support subcommand ([57b85c1](https://github.com/olets/git-random/commit/57b85c1125fd2c107803bd90f7dae76592f4b456))
* **zsh:** support installing as plugin ([b0d79bc](https://github.com/olets/git-random/commit/b0d79bcdc66ed85d98c2224b01524e4b4c059ae5))



# [v1.0.0-beta.1](https://github.com/olets/git-random/compare/initial...v1.0.0-beta.1) (2018-05-02 (committed 2024-01-10))

First public release.
