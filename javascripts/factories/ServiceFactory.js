"use strict";

app.factory("ServiceFactory", function($q, $http, FIREBASE_CONFIG) {

    let addService = (newService) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/service.json`,
                JSON.stringify({
                  //UPDATE THIS
                    uid: newService.uid
                })
            )
            .success((storeServiceSuccess) => {
                resolve(storeServiceSuccess);
            })
            .error((storeServiceError) => {
                reject(storeServiceError);
            });
        });
    };

    let getServices = (userId) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/services.json`)
            .success((userObject) => {
                let services = [];
                Object.keys(userObject).forEach((key) => {
                    userObject[key].id = key;
                    services.push(userObject[key]);
                });
                resolve(services);
            })
            .error((error) => {
                reject(error);
            });
        });
    };

    let getSingleService = function(selectedServiceId){
        return $q((resolve, reject)=>{
            $http.get(`${FIREBASE_CONFIG.databaseURL}/jobs/${selectedServiceId}.json`)
            .success(function(getSingleServiceResponse){
                resolve(getSingleServiceResponse);
            })
            .error(function(getSingleServiceError){
                reject(getSingleServiceError);
            });
        });
    };

    return{addService: addService, getServices: getServices, getSingleService: getSingleService};
});