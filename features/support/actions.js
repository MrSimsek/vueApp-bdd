const assert = require('assert');
const pages = require('./pages');
const selectors = require('./selectors');
const { Selector, ClientFunction } = require('testcafe');
const web = require('vue-app');
const endpoints = require('./endpoints');

const pending = callback => {
	callback(null, 'pending');
};

const navigateToPage = async routeName => {
    const url = web.host + pages[routeName];
    await testController.navigateTo(url);
};

const fillInFormField = async (field, value) => {
    const input = Selector(`#${field}`).with({ boundTestRun: testController });
    await testController
            .expect(input.value).eql('', 'input is empty')
            .typeText(input, value)
            .expect(input.value).eql(value, `input equals text ${value}`);
};

const pressButton = async buttonName => {
    const button = `#${buttonName}-button`;
    await testController.click(Selector(button));
    await testController.wait(2000);
};

const sendAPIRequest = async endpoint => {
    let url = web.host;
    switch(endpoint) {
        case 'register':
            url += endpoints[endpoint];
            console.log(url);
            break;
        case 'login':
            break;
        default:
            console.log('non valid endpoint');
            break;
    }
    // request with form values before submitting the form
    // check API response 
    // click login, check if user info is correct with the api response
};

const shouldBeOnPage = async routeName => {
    const getURL = ClientFunction(() => window.location.href).with({ boundTestRun: testController });
    const url = await getURL();
    await testController
            .expect(url).contains('/login', 'input contains text "/login"');
}

const shouldSeeText = async theText => {
    return true;
}

module.exports = {
    navigateToPage,
    shouldBeOnPage,
    pending,
    fillInFormField,
    pressButton,
    shouldSeeText,
    sendAPIRequest
}