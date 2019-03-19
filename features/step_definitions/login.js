const { Given, When, Then } = require('cucumber');
const {
    visitLoginPage,
    pending,
    fillInFormField,
    pressButton
} = require('../support/actions');

Given('a user exists with username {string} and password {string}', function (string, string2) {
    // create a user with username and password createUser
    return true;
});

Given('I am on the login page', visitLoginPage);

Given('I fill in {string} with {string}', fillInFormField);

Given('I press {string} button', pressButton);

Then('I should be on the {string} page', function (string) {
    // check if the current page is {string} checkCurrentPage()
    return 'pending';
});

Then('I should see {string} text', function (string) {
    // checkText
    return 'pending';
});

Then('the field {string} should be {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});