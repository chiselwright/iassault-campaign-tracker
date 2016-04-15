#!/bin/sh

#git subtree push --prefix public origin gh-pages
git push origin $(git subtree split --prefix public origin gh-pages):gh-pages --force
