"use strict";

app.controller("AllServicesCtrl", function ($scope, $routeParams, ServiceFactory){
  $scope.services = [];

  ServiceFactory.getServices().then((serviceList)=>{
    console.log("serviceList", serviceList);
    $scope.services = serviceList;
  });

});