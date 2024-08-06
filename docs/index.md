---
titleTemplate: :title # see also VitePress config
---

# git-random ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-random) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-random/latest)

![git-random splash card](/git-random-card.png)

**git-random** is an aid for learning and experimenting with Git. Use it to build random-content Git trees quickly.

Say you want to try some Git commands on this scenario:

```
a < b < c(branch-a)
  \
    d < e(branch-b)
```

Get there with

```shell
git switch -c branch-a
git random 2 # creates commits b and c
git switch -c branch-b @~2
git random 2 # creates commits d and e
```
