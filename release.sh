# TODO: make grunt release task
# set -x

VERSION=$1
VVERSION=v$VERSION
ZIP=shariff-$VERSION.zip

if [ "$1" == "" ]
    then
        echo "Please provide version information: Major.Minor.Patch => 1.2.3"
        exit 1
fi

SVERSION=$VERSION perl -pi -E 's{^(\s+"version":\s*)"[\d.]+"}{${1}"$ENV{SVERSION}"}' package.json bower.json
grunt build
git add bower.json package.json build
git commit -m "release $VVERSION"
git tag $VVERSION
git push
git push --tags
