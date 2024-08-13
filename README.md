# git-random ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-random) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-random/latest)

**git-random**: build random-content Git trees quickly. An aid for learning and experimenting with Git.

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

&nbsp;

## Documentation

📖 https://git-random.olets.dev/

&nbsp;

## Changelog

See the [CHANGELOG](CHANGELOG.md) file.

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/git-random/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

- <a href="https://www.github.com/olets/git-random">git-random</a> by <a href="https://www.github.com/olets">Henry Bley-Vroman</a> is, with the exception of its logo as covered below, licensed under a license which is the unmodified text of <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> and the unmodified text of a <a href="https://firstdonoharm.dev/build?modules=eco,extr,media,mil,sv,usta">Hippocratic License 3</a>. It is not affiliated with Creative Commons or the Organization for Ethical Source.

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

- The [git-random logo](https://github.com/olets/git-random/tree/main/docs/public/images/git-random-logo.png) is licensed under the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/). It is a modification of the [Git logo](https://git-scm.com/downloads/logos) created by [Jason Long](https://twitter.com/jasonlong) and is licensed under the same license. The license is available in the [LICENSE_LOGO](LICENSE_LOGO) file.

## Acknowledgments

Inspired by seeing Lorna Jane Mitchell use Matthew J. McCullough's [generaterandomchanges](https://github.com/matthewmccullough/scripts/blob/master/generaterandomchanges) in her talk ["Advanced Git for Developers"](https://www.youtube.com/watch?v=duqBHik7nRo).
