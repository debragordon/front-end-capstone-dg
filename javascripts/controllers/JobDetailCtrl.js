"use strict";

app.controller("JobDetailCtrl", function ($scope, $routeParams, JobFactory, InterestFactory, UserFactory){

  $scope.selectedJob = {};

  let jobId = $routeParams.id;
  console.log("jobId", jobId);

  JobFactory.getSingleJob(jobId).then(function(oneJob){
    oneJob.id = jobId;
    $scope.selectedJob.users = [];
    InterestFactory.getInterests(jobId).then(function(interestedPeople){
      let interesedPeopleArray = interestedPeople;
      interesedPeopleArray.forEach(function(person){
        UserFactory.getUser(person.uid).then(function(userInfo){
          $scope.selectedJob.users.push(userInfo);
        });
      });
    });
    console.log("oneJob", oneJob);
    $scope.selectedJob = oneJob;
  });

});