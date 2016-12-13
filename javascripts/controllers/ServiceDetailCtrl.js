"use strict";

app.controller("ServiceDetailCtrl", function ($scope, $routeParams, ServiceFactory){

  $scope.selectedService = {};

  let serviceId = $routeParams.id;
  console.log("serviceId", serviceId);

  ServiceFactory.getSingleService(serviceId).then(function(oneService){
    oneService.id = serviceId;
    console.log("oneService", oneService);
    $scope.selectedService = oneService;
  });

});