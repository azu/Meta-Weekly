#!/bin/sh

grunt
git add -A
git commit -m "Update"
git push https://$GH_TOKEN@github.com/azu/Meta-Weekly.git gh-pages