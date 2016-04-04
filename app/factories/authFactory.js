"use strict";

app.factory("authFactory", (firebaseURL) => {
  let ref = new Firebase(firebaseURL);
  let currentUserData = null;

  return {
    /*
      Determine if the client is authenticated
     */
    isAuthenticated () {
      let authData = ref.getAuth();

      if (authData) {
        currentUserData = authData;
        return true;
      } else {
        return false;
      }
    },
    getUser () {
      return currentUserData;
    },




    /*
      Authenticate the client via Firebase
     */
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({
          "email": credentials.email,
          "password": credentials.password
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            console.log("authWithPassword method completed successfully");
            currentUserData = authData;
            console.log("currentUserData", currentUserData);
            resolve(authData);
          }
        });
      });
    }
  };
});

