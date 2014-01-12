'use strict';

define(['services/routeResolver'], function () {

    var app = angular.module(config.appName, ['ngRoute', 'ngAnimate', 'routeResolverServices']);

    app.config(['$locationProvider','$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        function ($locationProvider, $routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            var route = routeResolverProvider.route;
            
            $locationProvider.html5Mode(true);
        
            angular.forEach(routes, function (value, key) {
                if(value.error == undefined) {
                    $routeProvider.when(key, route.resolve(value.controller, value.view));
                } else {
                    $routeProvider.when(key, route.resolve(value.controller, value.view));
                    $routeProvider.otherwise({ redirectTo: key });
                }
            });

    }]);

    return app;
});