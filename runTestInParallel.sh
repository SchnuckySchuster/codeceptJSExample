#!/bin/bash

rm -r output # I want to give allure a fresh start
npx codeceptjs run-multiple --steps --all  --plugins allure

allure serve output/*
