# TODO: make grunt release task
# set -x

VERSION=$1
VVERSION=v$VERSION
ZIP=shariff-$VERSION.zip

if [ "$1" == "" ]
    then
        echo "Please provide version information."
        exit 1
fi

SVERSION=$VERSION perl -pi -E 's{^(\s+"version":\s*)"[\d.]+"}{${1}"$ENV{SVERSION}"}' package.json bower.json
grunt build
git add bower.json package.json build
git commit -m "release $VVERSION"
git push
git tag $VVERSION
7z a -tzip $ZIP ./build/*
# rm -fr build
# https://github.com/aktau/github-release
github-release release -u heiseonline -r shariff -t $VVERSION -n $VERSION
github-release upload -u heiseonline -r shariff -t $VVERSION -n $ZIP -f $ZIP
git push
git push --tags
rm $ZIP
npm publish
