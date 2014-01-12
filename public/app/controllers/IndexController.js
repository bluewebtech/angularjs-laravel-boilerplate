'use strict';

define([config.appName], function (app) {

    app.register.controller('IndexController', ['$scope', '$http', function ($scope, $http) {
    	$scope.title = 'AngularJS + Laravel Boilerplate';
    }]);

});