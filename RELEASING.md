# Releasing

To prepare a release you have to do the following tasks:

1. Run `git flow release start [version]`.
2. Bump versions in `package.json` and `bower.json`.
3. Update [CHANGELOG.md](CHANGELOG.md).
2. Run `git flow release finish`.

After pushing the release tag to GitHub, Travis CI will create release downloads and push the release to [npmjs.com](https://www.npmjs.com).

Now you need to update [the release](https://github.com/heiseonline/shariff/releases) and attach the relevant pieces of information from the [CHANGELOG.md](CHANGELOG.md).
