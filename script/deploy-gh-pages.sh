#!/bin/sh

git checkout -B gh-pages
grunt
git add -A
git commit -m "Update"
git push https://$GH_TOKEN@github.com/azu/Meta-Weekly.git gh-pages