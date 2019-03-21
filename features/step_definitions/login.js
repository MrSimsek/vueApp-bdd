const { Given, When, Then } = require('cucumber');
const {
    navigateToPage,
    shouldBeOnPage,
    pending,
    fillInFormField,
    pressButton,
    shouldSeeText
} = require('../support/actions');

Given('a user exists with username {string} and password {string}', async (username, password) => {
    await navigateToPage('register');
    await fillInFormField('firstName', "Deniz");
    await fillInFormField('lastName', "Simsek");
    await fillInFormField('username', username);
    await fillInFormField('password', password);
    await pressButton('register');
    return await shouldBeOnPage('login');
});

Given('I am on the {string} page', navigateToPage);

Given('I fill in {string} with {string}', fillInFormField);

Given('I press {string} button', pressButton);

Then('I should be on the {string} page', shouldBeOnPage);

Then('I should see {string} text', shouldSeeText);

Then('the field {string} should be {string}', pending);