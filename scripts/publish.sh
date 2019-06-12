#!/bin/bash
set -ev

echo "$TRAVIS_PULL_REQUEST"
if [[ "$TRAVIS_BRANCH" = "master" && "$TRAVIS_PULL_REQUEST" = "false" ]]
then
  echo "$TRAVIS_PULL_REQUEST"
  yarn lib
  npm version patch --no-git
  npm publish
fi