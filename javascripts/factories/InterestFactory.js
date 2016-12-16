"use strict";

app.factory("InterestFactory", function($q, $http, FIREBASE_CONFIG) {

    let addInterest = (newInterest) => {
        console.log("newInterest", newInterest);
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/interests.json`,
                JSON.stringify({
                  jobId: newInterest.id,
                  uid: newInterest.uid
                })
            )
            .success((storeInterestSuccess) => {
                resolve(storeInterestSuccess);
            })
            .error((storeInterestError) => {
                reject(storeInterestError);
            });
        });
    };

    let getInterestsByJob = (jobId) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/interests.json?orderBy="jobId"&equalTo="${jobId}"`)
            .success((getInterestResponse) => {
                let interests = [];
                Object.keys(getInterestResponse).forEach((key) => {
                    getInterestResponse[key].id = key;
                    interests.push(getInterestResponse[key]);
                });
                resolve(interests);
            })
            .error((getInterestsError) => {
                reject(getInterestsError);
            });
        });
    };

    let getInterestsByUser = (uid) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/interests.json?orderBy="uid"&equalTo="${uid}"`)
            .success((getInterestResponse) => {
                let interests = [];
                Object.keys(getInterestResponse).forEach((key) => {
                    getInterestResponse[key].id = key;
                    interests.push(getInterestResponse[key]);
                });
                resolve(interests);
            })
            .error((getInterestsError) => {
                reject(getInterestsError);
            });
        });
    };

    let deleteInterest = (interestId) => {
        console.log("interestId", interestId);
        return $q((resolve, reject)=>{
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/interests/${interestId}.json`)
            .success(function(deleteInterestResponse){
                resolve(deleteInterestResponse);
            })
            .error(function(deleteInterestError){
                reject(deleteInterestError);
            });
        });
    };

    return{addInterest: addInterest, getInterestsByJob: getInterestsByJob, getInterestsByUser: getInterestsByUser,deleteInterest: deleteInterest};
});