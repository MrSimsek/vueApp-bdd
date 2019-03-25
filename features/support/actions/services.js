const { ClientFunction } = require('testcafe');

const checkLocalStorageHasUser = async username => {
    const localStorageGet = ClientFunction(key => localStorage.getItem(key)).with({ boundTestRun: testController });
    const stringifiedUserObject = await localStorageGet('user');
    const user = JSON.parse(stringifiedUserObject);

    await testController
            .expect(user.username).eql(username);
}

const checkLocalStorageHasNoUser = async () => {
    const localStorageGet = ClientFunction(key => localStorage.getItem(key)).with({ boundTestRun: testController });
    const stringifiedUserObject = await localStorageGet('user');
    
    await testController
            .expect(stringifiedUserObject).eql(null);
}

module.exports = {
    checkLocalStorageHasUser,
    checkLocalStorageHasNoUser
}