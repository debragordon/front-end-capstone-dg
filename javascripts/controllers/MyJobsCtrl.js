"use strict";

app.controller("MyJobsCtrl", function ($scope, $routeParams, $rootScope, JobFactory, InterestFactory){

    let currentUser = $rootScope.user.uid;
    $scope.interestedJobs = [];

    let getAllInterests = function(){
      $scope.interestedJobs = [];
      InterestFactory.getInterestsByUser(currentUser).then(function(response){
        let interestedPeopleArray = response;
        interestedPeopleArray.forEach(function(jobILike){
          JobFactory.getSingleJob(jobILike.jobId).then(function(jobDetails){
            jobDetails.interestId = jobILike.id;
            jobDetails.jobId = jobILike.jobId;
            $scope.interestedJobs.push(jobDetails);
          });
        });
        console.log("interestedJobs", $scope.interestedJobs);
      });
    };

    getAllInterests();

    $scope.removeInterest = function(job){
    console.log("job", job);
    InterestFactory.deleteInterest(job.interestId).then(function(){
      getAllInterests();
    });
  };
});