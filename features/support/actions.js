const assert = require('assert');
const pages = require('./pages');
const selectors = require('./selectors');
const { Selector } = require('testcafe');
const web = require('vue-app');

const pending = callback => {
	callback(null, 'pending');
};

const visitLoginPage = async () => {
    const url = web.host + pages.login;
    await testController.navigateTo(url);
};

const fillInFormField = async (field, value) => {
    // Select input field with the identifier, fill the value
    var input = Selector(`#${field}`).with({boundTestRun: testController});
    await testController.typeText(input, value);
};

const pressButton = async buttonName => {
    // select the button, and press it
    const button = `#${buttonName}-button`;
    await testController.click(Selector(button));
}

module.exports = {
    visitLoginPage,
    pending,
    fillInFormField,
    pressButton
}