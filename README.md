# codeceptJSExample
## Preface
This is a small example of a working **codeceptJS** test project using **allure** as test reporting tool. 

I have created this example while evaluating codeceptJS.

I'm working on OSX and have not tested whether any of this works on Windows or Linux.

## Installation
I assume you have installed nodeJS, mpn and allure on your computer.
Once you have done this, the rest is easy

* clone this repository
* open a console in the cloned repository and type:
  
      npm install
      npx codeceptjs run --steps --plugins allure
      allure serve output

The installation should start. After installation is finished three tests should be executed. Finally the allure server should start and open a browser window presenting the test result.

## Intention
With this example I want to show how to code tests using most features codeceptJS provides.

* The tests will open the german version of wikipedia and will search for an article
* All tests will do the same but using different approaches
* One test step is very simple just coding the flow
* With another test I want to show how to use **fragments** and **steps**
* The third example is coded using **Gherkin**

## Advanced features
* In "./helpers/puppeteer_helper.js" you can find examples on how to code helpers for puppeteer. 
* Running tests in parallel works like this:
    
      npx codeceptjs run-multiple --steps --all  --plugins allure
      allure serve output/*
* The Gherkin tests are executed first and are not executed in parallel to the rest of the tests

## References
### Tools
* [Allure](https://docs.qameta.io/allure/)
* [CodeceptJS](https://codecept.io)
* [NodeJS](https://nodejs.org/en/)

### Youtube tutorials
* [ATDD with CodeceptJS: Effective Testing Without Pain, Michael Bodnarchuk](https://youtu.be/paBe0uu68uc)

Enjoy
