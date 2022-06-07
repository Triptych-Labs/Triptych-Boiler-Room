#!/bin/sh
rm -rf ./metaplex
mkdir -p ./cmui
rm -rf ./cmui/**
git clone https://github.com/Triptych-Labs/metaplex.git ./metaplex
cp -r ./metaplex/js/packages/candy-machine-ui/src/** ./cmui/

