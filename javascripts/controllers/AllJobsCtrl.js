"use strict";

app.controller("AllJobsCtrl", function ($scope, $routeParams, JobFactory){
  $scope.jobs = [];

  JobFactory.getJobs().then((jobList)=>{
    console.log("jobList", jobList);
    $scope.jobs = jobList;
  });

});