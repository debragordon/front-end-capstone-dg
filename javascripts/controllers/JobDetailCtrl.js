"use strict";

app.controller("JobDetailCtrl", function ($scope, $routeParams, JobFactory){

  $scope.selectedJob = {};

  let jobId = $routeParams.id;
  console.log("jobId", jobId);

  JobFactory.getSingleContact(jobId).then(function(oneJob){
    oneJob.id = jobId;
    console.log("oneJob", oneJob);
    $scope.selectedJob = oneJob;
  });

});