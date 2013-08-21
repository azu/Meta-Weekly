#!/bin/sh

if [[ "$TRAVIS_PULL_REQUEST" == "true" ]]; then
echo "This is a pull request. No deployment will be done.";
  exit 0;
fi
if [[ "$TRAVIS_BRANCH" != "master" ]] && [[ "$TRAVIS_BRANCH" != "staging" ]]; then
echo "This is not a deployable branch.";
  exit 0;
fi
git checkout -B gh-pages
grunt
git add -A
git commit -m "Update"
git push https://$GH_TOKEN@github.com/azu/Meta-Weekly.git gh-pages