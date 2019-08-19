#!/bin/bash

rm -r output # I want to give allure a fresh start
npx codeceptjs run --steps --plugins allure

allure serve output
