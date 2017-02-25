conferenceApp.controller('bookController', ['$scope', '$mdpTimePicker', '$filter', 'BookRoom','$http', function($scope, $mdpTimePicker, $filter, BookRoom,$http) {
	$scope.message = 'Everyone come and book a room';
	
	$scope.rooms=["Pushya","Revati","Anurdha","Rohini","Kritika","Ashwini"];

  this.showTimePicker = function(ev) {
  	$mdpTimePicker($scope.currentTime, {
      targetEvent: ev
    }).then(function(selectedDate) {
      $scope.currentTime = selectedDate;
      console.log($scope.currentTime);
    });
  };
  
  $scope.getRooms = function(){
	  //show available rooms
	  $scope.showRooms = true;
	  
	  var d1 = $scope.meetingDate;
	  var d2 = d1.setMinutes(d1.getMinutes() + 30);
	  
	  //format dateTime
	  $scope.startDateTime = $filter('date')(d1, 'yyyy-MM-ddTHH:mm:ss') + "+05:30";
	  $scope.endDateTime = $filter('date')(d2, 'yyyy-MM-ddTHH:mm:ss') + "+05:30";
	 /* var sDate = $scope.startDateTime;
	  var eDate = $scope.endDateTime;*/
	  
	  sDate= "2017-02-21T02:00:00+05:30";
	  eDate="2017-02-28T02:00:30+05:30";
	  var bookingdata = {
			  startDateTime: sDate,
			  endDateTime: eDate
			  };
	  
	//Call the services
	$scope.bookRoomStatus={};
	  var calurl="http://10.222.120.28:3001/getAllRoomsStatus";
	  var parameter = JSON.stringify(bookingdata);
	  console.log(parameter);
	    $http.post(calurl, parameter).
	    success(function(data, status, headers, config) {
	       console.log(data);
	       $scope.bookRoomStatus=data;
	      }).
	      error(function(data, status, headers, config) {
	      
	      });
  };
  
  $scope.checkColor=function(room){
	  $scope.color='';
	 if(room.roomStatus=='Available')  {
			 $scope.color='AE';
			 return $scope.color;
		}
		else if(room.roomStatus=='Booked')  {
			 $scope.color='BO';
			 return $scope.color;
		}
	 
  };
  
  $scope.updateEndTme = function(){
	  var start = [];
	  start = $scope.startTime.split(":");
	  start[1] += 30;
	  $scope.endTime = start[0] + ":" + start[1];
	  
  };
}]);