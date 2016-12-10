"use strict";

app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG) {

    let addUser = (authData) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`,
                JSON.stringify({
                    uid: authData.uid,
                    username: authData.username
                })
            )
            .success((storeUserSuccess) => {
                resolve(storeUserSuccess);
            })
            .error((storeUserError) => {
                reject(storeUserError);
            });
        });
    };

    let getUser = (userId) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
            .success((userObject) => {
                let users = [];
                Object.keys(userObject).forEach((key) => {
                    users.push(userObject[key]);
                });
                resolve(users[0]);
            })
            .error((error) => {
                reject(error);
            });
        });
    };

    let editUser = (editProfile) => {
        console.log("factory edit response", editProfile);
        return $q((resolve, reject)=>{
          $http.put(`${FIREBASE_CONFIG.databaseURL}/users/${editProfile.id}.json`, JSON.stringify({
            firstName: editProfile.firstName,
            lastName: editProfile.lastName,
            telephone: editProfile.telephone,
            city: editProfile.city,
            state: editProfile.state,
            yearsInBusiness: editProfile.yearsInBusiness,
            professionalBio: editProfile.professionalBio,
            primaryGenre: editProfile.primaryGenre,
            secondaryGenre: editProfile.secondaryGenre
            })
          )
            .success(function(editResponse){
              resolve(editResponse);
            })
            .error(function(editError){
              reject(editError);
            });
        });
    };

    return{addUser: addUser, getUser: getUser, editUser: editUser};
});