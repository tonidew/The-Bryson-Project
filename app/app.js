"use strict";

let app = angular.module("BrysonApp", ["ngRoute", "firebase"]).constant('firebaseURL', "https://brysonapp.firebaseio.com/");


// FOR REFERENCE let app = angular.module("BrysonApp", ["ngRoute", "firebase"]).constant('firebaseURL', "https://movie-history-proj.firebaseio.com/");


  
/*
  Define a promise for any view that needs an authenticated user
  before it will resolve (see below)
 */
let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});


app.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/NavigatingNashville.html",
        controller: "NavigatingNashvilleCtrl"//,
        // resolve: { isAuth }
       
      }).
      when("/logout", {
        templateUrl: "partials/NavNashForum.html",
        controller: "NavNashForumCtrl"
      }).
      when("/forum", {
        templateUrl: "partials/NavNashForum.html",
        controller: "NavNashForumCtrl",
      }).
      when("/submitComment", {
        templateUrl: "partials/ShowAllComments.html",
        controller: "ShowAllCommentsCtrl",
      })

      // when("/user-movies", {
      //   templateUrl: "partials/user-movies.html",
      //   controller: "UserMovieCtrl",
      //   resolve: { isAuth }
      // }).
      // otherwise({
      //   redirectTo: "/"
      // });
  }]);














