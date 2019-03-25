const { setWorldConstructor } = require('cucumber');
const testControllerHolder = require('./testControllerHolder');

function CustomWorld({attach, parameters}) {

    this.waitForTestController = testControllerHolder.get()
        .then(function(tc) {
            return testController = tc;
        });

    this.attach = attach;

    this.setBrowser = function() {
        if (parameters.browser === undefined) {
            return 'chrome';
        } else {
            return parameters.browser;
        }
    };
}

setWorldConstructor(CustomWorld);
