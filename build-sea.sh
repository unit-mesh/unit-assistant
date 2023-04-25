#!/usr/bin/env bash

# if not installed, install bkg
if ! [ -x "$(command -v bkg)" ]; then
    curl -fsSL https://github.com/theseyan/bkg/raw/main/install.sh | sudo sh
fi

if ! [ -d "./bin" ]; then
    mkdir ./bin
fi

# This script builds the Sea project.
bkg . --output ./bin/app