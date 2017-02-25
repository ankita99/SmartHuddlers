conferenceApp.controller('adhocController', ['$scope','$state','$location','$window','$http','$timeout', '$interval','Adhoc', function($scope, $state, $location, $window, $http, $timeout, $interval,Adhoc) {
	$scope.message = 'adhoc controller called.';
	
	$scope.adhocStatus={};
	$scope.CurrentDate = new Date();
	var update = function() {
		$scope.CurrentDate = new Date();
		$timeout(update, 1000);
	}
	$timeout(update, 1000);

$scope.roomList={  "roomStatus":[
                             { "name":"Pushya",
                                "status":"available"
                              },
                              {
                            	  "name":"Ashwini",
                                  "status":"available"
                              },
                              {
                            	  "name":"Revati",
                                 "status":"booked"
                              },
                              {
                            	  "name":"Rohini",
                                 "status":"BNO"
                              },
                              {
                            	  "name":"Kritika",
                                 "status":"FBO"
                              }
                               ] };

	
	$scope.getAdhocStatus = function(){
		var adhocData = Adhoc.get(function(){
			$scope.adhocStatus = adhocData;
		},function(error){
			console.log('Error in retrieving rooms data '+error.data);
		});

	};
	
	$scope.getAdhocStatus();
	
	$scope.startTimer = function(){
		var c = 44;
		$scope.timer = $interval(function(){
			$scope.timer = "Refreshing in : "+c;
			c--;
			if (c == 0) {
				c=44;
				$scope.getAdhocStatus();
				$scope.timer = "Refreshing Page";
			};
		}, 1000);
	};
	$scope.startTimer();

}]);