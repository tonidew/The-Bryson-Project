"use strict";

app.controller ("NavNashForumCtrl",
	[
	"$scope",
	"$http",



	function ($scope, $http) {
    $scope.text = "";
    console.log("controller is working")

    $scope.submitComment = function() {
    	console.log("submitContent")

    	// let user=auth.getUser();
    	let newforumcontent= {
    		text:$scope.text
    		// uid: user.uid
    	}

    	$http.post("https://brysonapp.firebaseio.com/forum.json",

    		JSON.stringify(newforumcontent)

    		).then(
    		(response) => console.log(response))
}

    $scope.logOut = function ($scope) {
        let authData = false; 
        console.log("User logged out") 
   }   
}
]);






























