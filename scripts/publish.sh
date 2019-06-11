#!/bin/bash
set -ev

if [ "$TRAVIS_BRANCH" = "master" ]
then
  yarn lib
  npm version patch --no-git
  # npm publish
fi