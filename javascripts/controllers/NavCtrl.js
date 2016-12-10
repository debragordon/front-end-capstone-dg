"use strict";

app.controller("NavCtrl", ($scope, AuthFactory) => {

  $scope.isLoggedIn = function() {
    return AuthFactory.isAuthenticated();
  };

});
