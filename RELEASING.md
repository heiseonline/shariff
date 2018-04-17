# Releasing

To prepare a release you have to do the following tasks:

1. Run `git flow release start [version]`.
2. Bump versions in `package.json`.
3. Update [CHANGELOG.md](CHANGELOG.md).
4. Run `npm install` to update `package-lock.json`.
5. Commit changes.
6. Run `git flow release finish`.

After pushing the release tag to GitHub, Travis CI will create release downloads and push the release to [npmjs.com](https://www.npmjs.com).

Now you need to update [the release](https://github.com/richard67/shariff-plus/releases) and attach the relevant pieces of information from the [CHANGELOG.md](CHANGELOG.md).
