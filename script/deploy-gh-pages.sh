#!/bin/bash

if [[ "$TRAVIS_PULL_REQUEST" == "true" ]]; then
echo "This is a pull request. No deployment will be done.";
  exit 0;
fi
if [[ "$TRAVIS_BRANCH" != "master" ]] && [[ "$TRAVIS_BRANCH" != "staging" ]]; then
echo "This is not a deployable branch.";
  exit 0;
fi

echo "BUMP HELLO WORLD set up $GH_REPO [via travis] for $GIT_NAME <${GIT_EMAIL}>"
export REPO_URL="https://$GH_TOKEN@github.com/$GH_REPO.git"
git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_NAME"
lastCommit=$(git log --oneline | head -n 1)

git checkout -B gh-pages
grunt

echo "=STATUS="
git status

echo "=COMMIT="
echo "MESSAGE :" $lastCommit

git add .
git commit -m "Build gh-pages: $lastCommit"
git push --quiet $REPO_URL gh-pages 2> /dev/null