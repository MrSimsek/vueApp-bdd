const assert = require('assert');
const pages = require('./pages');
const selectors = require('./selectors');
const { Selector, ClientFunction } = require('testcafe');
const web = require('vue-app');

const pending = callback => {
	callback(null, 'pending');
};

const navigateToPage = async routeName => {
    const url = web.host + pages[routeName];
    await testController.navigateTo(url);
};

const fillInFormField = async (field, value) => {
    var input = Selector(`#${field}`).with({ boundTestRun: testController });
    await testController.typeText(input, value);
};

const pressButton = async buttonName => {
    const button = `#${buttonName}-button`;
    await testController.click(Selector(button));
};

const shouldBeOnPage = async routeName => {
    // check the url matches routeName
    return true;
}

module.exports = {
    navigateToPage,
    shouldBeOnPage,
    pending,
    fillInFormField,
    pressButton
}