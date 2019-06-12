#!/bin/bash
set -ev

if [[ "$TRAVIS_BRANCH" = "master" && "$TRAVIS_PULL_REQUEST" = "false" ]]
then
  yarn lib
  yarn global add makeshift
  makeshift -r https://registry.npmjs.org/ -t $NPM_TOKEN
  npm version patch --no-git-tag-version
  npm publish
fi