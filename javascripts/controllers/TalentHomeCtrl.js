"use strict";

app.controller("TalentHomeCtrl", function ($scope, $routeParams, $rootScope, JobFactory, InterestFactory){
  $scope.jobs = [];

  JobFactory.getJobs().then((jobList)=>{
    console.log("jobList", jobList);
    jobList.forEach(function(job){
      InterestFactory.getInterestsByJob(job.id).then(function(listOfInterests){
        console.log("listOfInterests", listOfInterests);
        listOfInterests.forEach(function(){
          if ($rootScope.user.uid === listOfInterests.uid) {
            add .interesed property = true;
          }

        });
      });
    });
    $scope.jobs = jobList;
  });

});