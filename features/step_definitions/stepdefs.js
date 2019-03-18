const { Given, When, Then } = require('cucumber');
const {
    visitLoginPage,
    pending,
    fillInFormField
} = require('../support/actions');

Given('a user exists with username {string} and email {string} and password {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return true;
});

Given('I am on the login page', visitLoginPage);

Given('I fill in {string} with {string}', fillInFormField);

Given('I press {string} button', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be on the home page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see {string} text', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should stay on the login page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the field {string} should be {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});