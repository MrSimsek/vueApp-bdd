const assert = require('assert');
const pages = require('./pages');
const selectors = require('./selectors');
const scope = require('./scope');

// Defines whether puppeteer runs Chrome in headless mode
let headless = false;
let slowMotion = 5000;

// Chrome is set to run headlessly and with no slowdown in CircleCI
if(process.env.CIRCLECI) {
    headless = true;
    slowMotion = 0;
}

const pending = callback => {
	callback(null, 'pending');
};

const visitLoginPage = async () => {
    if (!scope.browser) 
        scope.browser = await scope.driver.launch({ headless, slowMotion });
	scope.context.currentPage = await scope.browser.newPage();
	scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
	const url = scope.host + pages.login;
	const visit = await scope.context.currentPage.goto(url, {
		waitUntil: 'networkidle2'
    });
	return visit;
};

const fillInFormField = async (field, value) => {
    console.log(field, value);
};

module.exports = {
    visitLoginPage,
    pending,
    fillInFormField
}