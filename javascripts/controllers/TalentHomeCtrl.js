"use strict";

app.controller("TalentHomeCtrl", function ($scope, $routeParams, $rootScope, JobFactory, InterestFactory){
  $scope.jobs = [];

  JobFactory.getJobs().then((jobList)=>{
    console.log("jobList", jobList);
    jobList.forEach(function(job){
      InterestFactory.getInterestsByJob(job.id).then(function(listOfInterests){
        console.log("listOfInterests", listOfInterests);
        listOfInterests.forEach(function(job){
          if ($rootScope.user.uid === job.uid) {
            $scope.job.interested = true;
          }

        });
      });
    });
    $scope.jobs = jobList;
  });

});