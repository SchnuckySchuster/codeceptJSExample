const Helper = codeceptjs.helper;
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPadMiniLandscape = devices['iPad Mini landscape'];
const iPhone = devices['iPhone 6'];

class PuppeteerHelper extends Helper {
  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  async typeOnKeyboard(text) {
    const { page } = this.helpers.Puppeteer;
    page.keyboard.type(text);
  }

  async amOnAnIPadInLandscapeModus(text) {
    const { page } = this.helpers.Puppeteer;
    page.emulate(iPadMiniLandscape);
  }

  async amOnAnIPhone(text) {
    const { page } = this.helpers.Puppeteer;
    page.emulate(iPhone);
  }
}

module.exports = PuppeteerHelper;
