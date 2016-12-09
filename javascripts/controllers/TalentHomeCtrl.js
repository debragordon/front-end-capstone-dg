"use strict";

app.controller("TalentHomeCtrl", function ($scope, $routeParams, JobFactory){
  $scope.jobs = [];

  JobFactory.getJobs().then((jobList)=>{
    console.log("jobList", jobList);
    $scope.jobs = jobList;
  });


});