// app.js
angular.module('myApp', [])
    .controller('CourseController', function ($scope) {
        $scope.courses = [
            { name: 'Mathematics' },
            { name: 'Physics' },
            { name: 'Chemistry' },
            { name: 'Biology' },
            { name: 'Computer Science' }
        ];
    })
    .directive('iitml', function () {
        return {
            restrict: 'E',
            template: '<div class="iitml">IITML Directive: {{ text }}</div>',
            scope: {
                text: '@'
            }
        };
    });

