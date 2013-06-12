'use strict';

var app = angular.module('app');

app.controller('MainUICtrl', function($scope, $routeParams, Requirement, $http) {

  $scope.requirements = [];
  $scope.requirement = null;
  $scope.mode = 'add';

  // get all of the requirements for the challenge
  $http({method: 'GET', url: '/requirements.json?challenge_id=' + $routeParams.challenge_id}).
    success(function(data, status, headers, config) {
      angular.forEach(data, function(req){
        $scope.requirements.push(req);
      });        
    }).
    error(function(data, status, headers, config) {
      console.log(data);
  });  

  $scope.types = ["Yes/No","1-4","1-5","1-10","Comments"];  

  $scope.libraries = [
    {name: "Salesforce.com", value: "salesforce.com"},
    {name: "Google App Engine - Java", value: "appengine-java"},
    {name: "Google App Engine - Python", value: "appengine-python"}    
  ];  

  $scope.addFromLibrary = function() {
    $http({method: 'GET', url: '/requirements/library.json?q=' + $scope.library.value}).
      success(function(data, status, headers, config) {
        angular.forEach(data, function(req){
          $scope.requirements.push(req);
        });        
      }).
      error(function(data, status, headers, config) {
        console.log(data);
    });
  }

  $scope.add = function() {
    var requirement = newRequirement($scope.newRequirement.description);
    requirement.$save(function() {
      $scope.requirements.push(requirement);
      $scope.newRequirement = null;
    });
  }  

  $scope.edit = function(requirement) {
    $scope.mode = 'edit';
    $scope.requirement = requirement;
  }  

  $scope.delete = function(requirement) {
    var index = $scope.requirements.indexOf(requirement);
    console.log(requirement)
    $scope.requirements.splice(index,1);
  }    

  $scope.done = function() {
    $scope.requirement = null;
    $scope.mode = 'add';
  }    

  function newRequirement(description) {
    var r = new Requirement();
    r.description = description;
    r.section = 'Functional';
    r.scoring_type = '1-4';
    r.challenge_id = $routeParams.challenge_id;
    r.active = true;
    r.weight = .1
    return r;
  }

});