'use strict';

var app = angular.module('app');

var sfdc_requirements = [
  {"section": "Best Practices",
   "description": "Must use a standard controller plus a controller extension to implement the UI in the visualforce page.",
   "type": "1-4",
   "order": 1},
  {"section": "Technical",
   "description": "Uses Salesfore.com best practices for development and bulkifying of trigger code.",
   "type": "Yes/No",
   "order": 2},
  {"section": "Testing",
   "description": "Must test positive and negative test cases.",
   "type": "1-4",
   "order": 3}
];  

app.controller('MainUICtrl', function($scope, $routeParams) {

  $scope.requirement = null;
  $scope.mode = 'add';

  $scope.requirements = [
    {"section": "Functional",
     "description": "Must use a standard controller plus a controller extension to implement the UI in the visualforce page.",
     "type": "1-4",
     "order": 1},
    {"section": "Functional",
     "description": "Uses Salesfore.com best practices for development and bulkifying of trigger code.",
     "type": "Yes/No",
     "order": 2},
    {"section": "Functional",
     "description": "Must implement the logical UI that is seen in the screenshot.",
     "type": "1-5",
     "order": 3}
  ];

  $scope.types = ["Yes/No","1-4","1-5","1-10","Comments"];  

  $scope.stdrequirments = [
    {name: "Salesforce.com (3)", value: "sfdc"},
    {name: "Google App Engine - Java (10)", value: "appengine-java"},
    {name: "Google App Engine - Python (8)", value: "appengine-python"}    
  ];  

  $scope.addstandard = function() {
    console.log($scope.standardtype.value);
    if ($scope.standardtype.value == 'sfdc') {
      for (var i=0;i<sfdc_requirements.length;i++) {
        var req = sfdc_requirements[i];
        req.order = $scope.requirements.length+1;
        $scope.requirements.push(req);
      }
    }
  }

  $scope.add = function() {
    $scope.requirements.push({description: $scope.newRequirement.description, 
      section: "Functional",order:$scope.requirements.length+1, 
      type: "1-4"});
    $scope.newRequirement = null;
  }  

  $scope.edit = function(requirement) {
    toggle();
    $scope.requirement = requirement;
    console.log(requirement.type);
  }  

  $scope.delete = function(requirement) {
    var index = $scope.requirements.indexOf(requirement);
    $scope.requirements.splice(index,1);
  }    

  $scope.done = function() {
    $scope.requirement = null;
    toggle();
  }    

  function toggle() {
    if ($scope.mode == 'add') {
      $scope.mode = 'edit';
    } else {
      $scope.mode = 'add';
    }
  } 


});