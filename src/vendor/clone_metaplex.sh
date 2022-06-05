#!/bin/zsh
mkdir -p ./cmui
rm -rf ./cmui/**
git clone git@github.com:metaplex-foundation/metaplex.git ./metaplex
cp -r ./metaplex/js/packages/candy-machine-ui/src/** ./cmui/

