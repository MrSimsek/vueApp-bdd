const endpoints = {
    authenticate: '/users/authenticate',
    register: '/users/register',
    getUser: userId => `/users/${userId}`,
    deleteUser: userId => `/users/${userId}`
}

module.exports = endpoints;