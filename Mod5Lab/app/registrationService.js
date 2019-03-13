angular.module('registrationService', ['ngResource']).
factory('registration', [
    '$resource',
    function ($resource) {
        console.log("registrationService")
        return $resource('https://reqres.in/api/register',
            {},
            {
                submit: {
                    method: 'POST'
                },
            });
    }
]); 