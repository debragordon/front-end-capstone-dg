"use strict";

app.controller("DesignerCtrl", function ($scope, $routeParams, $rootScope, $http){

  console.log("designer is connected");

  $http.get("/data/seeder.json").then(response =>{
    $scope.seederData = response.data;
    $scope.images = $scope.seederData.packages;
  });


});