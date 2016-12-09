"use strict";

app.factory("JobFactory", function($q, $http, FIREBASE_CONFIG) {

    let addJob = (newJob) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/job.json`,
                JSON.stringify({
                    title: newJob.title,
                    pay: newJob.pay,
                    numberTalentNeeded: newJob.numberTalentNeeded,
                    gender: newJob.gender,
                    musicGenre: newJob.musicGenre,
                    skillNeededMain: newJob.skillNeededMain,
                    readMusicRequired: newJob.readMusicRequired,
                    locationCity: newJob.locationCity,
                    locationState: newJob.locationState,
                    zipCode: newJob.zipCode,
                    uid: newJob.uid
                })
            )
            .success((storeJobSuccess) => {
                resolve(storeJobSuccess);
            })
            .error((storeJobError) => {
                reject(storeJobError);
            });
        });
    };

    let getJob = (userId) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/jobs.json`)
            .success((userObject) => {
                let jobs = [];
                Object.keys(userObject).forEach((key) => {
                    jobs.push(userObject[key]);
                });
                resolve(jobs[0]);
            })
            .error((error) => {
                reject(error);
            });
        });
    };

    return{addJob: addJob, getJob: getJob};
});