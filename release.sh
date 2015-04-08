# TODO: make grunt release task
# set -x

VERSION=$1
VVERSION=v$VERSION
ZIP=shariff-$VERSION.zip

SVERSION=$VERSION perl -pi -E 's{^(\s+"version":\s*)"[\d.]+"}{${1}"$ENV{SVERSION}"}' package.json bower.json
git add bower.json package.json
git commit -m "release $VVERSION"
git tag $VVERSION
grunt build
7z a -tzip $ZIP ./build/*
rm -fr build
github-release release -t $VVERSION -n $VERSION
github-release upload -t $VVERSION -n $ZIP -f $ZIP
rm $ZIP
