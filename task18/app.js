// app.js
angular.module('myApp', [])
    .service('GreetingService', function () {
        this.getGreeting = function () {
            return 'Hello, Dependency Injection!';
        };
    });

//   Inject the Service into the Controller
angular.module('myApp')
.controller('MyController', function ($scope, GreetingService) {
    $scope.greeting = GreetingService.getGreeting();
});
