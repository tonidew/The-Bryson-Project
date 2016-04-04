"use strict";

app.controller ("ShowAllCommentsCtrl", 
	["$q",
	"$scope",
	"$http",
  "$location",
  "authFactory",
 

  function($q, $scope, $http, $location, auth) {
    $scope.text = "";
    $scope.myForum = [];

    //Reading text from firebase

    var getForum = $q(function(resolve, reject) {
      $http.get('https://brysonapp.firebaseio.com/forum.json')
      .success(
        function(Forum) {
        	console.log(Forum)
          resolve(Forum);
        }, function(error) {
          reject(error);
        }
      );
    });

  getForum.then(function (Forum) {
    //$scope.myForum = Forum;
    console.log("typeof Forum", typeof Forum);
    Object.keys(Forum).forEach(key => {
        Forum[key].id = key;
        $scope.myForum.push(Forum[key]);
    })
    console.log("Forum",Forum);
  }), function (error) {
    console.log("Failed");
  };

  auth.isAuthenticated();
  let user = auth.getUser();
  console.log("user", user);

  $scope.deleteComment = function(uid, id) {
    console.log("user.uid", user.uid);
    console.log("uid", uid);
      if (user.uid == uid) {
    $http
        .delete(`https://brysonapp.firebaseio.com/forum/${id}.json`)
        .then(() => $location.url("/"));
        } else {
        alert ("you may not remove other comments");
      }
    }


  }
]);
