"use strict";

app.controller("ProfileViewCtrl", function ($scope, $routeParams, UserFactory, AuthFactory){

  console.log("route connected");
  $scope.selectedUser = "";

  let userId = AuthFactory.getUser().uid;

  UserFactory.getUser(userId).then((currentUser)=>{
    console.log("currentUser", currentUser);
    $scope.selectedUser = currentUser;
  });

});