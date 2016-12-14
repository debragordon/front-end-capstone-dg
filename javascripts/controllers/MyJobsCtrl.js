"use strict";

app.controller("MyJobsCtrl", function ($scope, $routeParams, $rootScope, JobFactory, InterestFactory){

    let currentUser = $rootScope.user.uid;
    $scope.interestedJobs = [];

    InterestFactory.getInterestsByUser(currentUser).then(function(response){
      let interestedPeopleArray = response;
      interestedPeopleArray.forEach(function(person){
        JobFactory.getSingleJob(person.jobId).then(function(jobDetails){
          jobDetails.interestId = person.id;
          $scope.interestedJobs.push(jobDetails);
        });
      });
    });

    $scope.removeInterest = function(job){
    InterestFactory.deleteInterest(job.interestId).then(function(){
        $scope.interestedJobs.splice($scope.interestedJobs.indexOf(job),1);
    });
  };
});