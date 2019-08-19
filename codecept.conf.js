exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true
    },
    PuppeteerHelper: {
      require: './helpers/puppeteer_helper.js'
    }
  },
  include: {
    I: './test_steps/testSteps.js',
    searchBarFragment: './fragments/searchBar.js',
    testPagePage: './pages/testPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./gherkin_definitions/gherkinSteps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {},
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      screenshotsForAllureReport: true
    }
  },
  tests: './tests/*_test.js',
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['puppeteer']
    }
  },
  name: 'codeCeptjs'
}
