"use strict";

app.controller("NavCtrl", ($scope) => {
  $scope.navItems = [{name: "Logout", url: "#/logout"},
    {name:"My Profile", url: "#/talent-myprofile"},
    {name:"My Services", url: "#/talent-myservices"},
    {name:"My Jobs", url: "#/all-jobs"}];
});
