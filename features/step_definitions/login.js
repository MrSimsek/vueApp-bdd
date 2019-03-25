const { Given, When, Then } = require('cucumber');
const UI = require('../support/actions/ui');
const services = require('../support/actions/services');

Given('a user exists with username {string} and password {string}', async (username, password) => {
    await UI.navigateToPage('register');
    await UI.fillInFormField('firstName', "Deniz");
    await UI.fillInFormField('lastName', "Simsek");
    await UI.fillInFormField('username', username);
    await UI.fillInFormField('password', password);
    await UI.pressButton('register');
    // services: check if user is in users object
    return await UI.shouldBeOnPage('login');
});

Given('I provide {string} with {string}', UI.fillInFormField);

When('the user is logging in', async () => {
    // UI: check if form fields are empty
    return await UI.pressButton('login');
});

Then('the user should be logged in', async () => {
    // UI: check the page has user.firstName
    return await services.checkLocalStorageHasUser('denizsimsek');
});

Then('the user should not be logged in', async () => {
    // UI: check if there is an error message on the page
    return await services.checkLocalStorageHasNoUser();
});