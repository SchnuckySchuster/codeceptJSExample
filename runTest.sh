#!/bin/bash

rm -r output # I want to give allure a fresh start

# Running the test files in parallel generates individual test result folders, which I do not want
# codeceptjs run-multiple --steps --all  --plugins allure

npx codeceptjs run --steps --plugins allure
