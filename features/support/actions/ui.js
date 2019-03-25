const pages = require('../references/pages');
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
    const input = Selector(`#${field}`).with({ boundTestRun: testController });

    await testController
            .expect(input.value).eql('', 'input is empty')
            .typeText(input, value)
            .expect(input.value).eql(value, `input equals text ${value}`);
};

const pressButton = async buttonName => {
    const button = Selector(`#${buttonName}-button`);

    await testController.click(button);
    await testController.wait(2000);
};

const shouldBeOnPage = async routeName => {
    const getURL = ClientFunction(() => window.location.href).with({ boundTestRun: testController });
    const url = await getURL();
    await testController
            .expect(url).contains(routeName, `input contains text ${routeName}`);
}

module.exports = {
    pending,
    navigateToPage,
    fillInFormField,
    pressButton,
    shouldBeOnPage
}