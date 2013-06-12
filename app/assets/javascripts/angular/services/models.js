'use strict';

var app = angular.module('app');

app.factory('Requirement', ['$resource', function($resource) {
    return $resource('/requirements/:id', {id: '@id'}, {update: {method: "PUT"}});
}]);