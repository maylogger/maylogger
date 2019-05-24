#!/usr/bin/env sh

set -e

yarn docs:build

cd docs/.vuepress/dist

echo 'maylogger.com\nwww.maylogger.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:evenwu/maylogger.git master:gh-pages

cd -