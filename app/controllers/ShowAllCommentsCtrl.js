"use strict";

app.controller ("ShowAllCommentsCtrl", 
	["$q",
	"$scope",
	"$http",


  function($q, $scope, $http) {
    $scope.text = "";
    $scope.myForum = {};

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
    $scope.myForum = Forum;
    console.log("Forum",Forum);
  }, function (error) {
    console.log("Failed");
  });


}
   ])
