conferenceApp.controller('bookController', ['$scope', '$mdpTimePicker', '$filter', 'BookRoom','$http','uiTimepickerConfig','$location','$window', function($scope, $mdpTimePicker, $filter, BookRoom,$http,uiTimepickerConfig,$location,$window) {
	$scope.message = 'Everyone come and book a room';
	 $scope.startDateTime =null;
	 $scope.endDateTime =null;
	 $scope.meetingDate=null;
	 $scope.startTime =null;
	 $scope.endTime =null;
	 $scope.meetingTitle=null;
	 
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

	  $scope.startDateTime = $filter('date')(d1, 'yyyy-MM-ddT');
	  $scope.finalStartDate=$scope.startDateTime+$scope.startTime+ ":00+05:30";
	  $scope.finalEndDate=$scope.startDateTime+$scope.endTime+ ":00+05:30";
	  
	  var bookingdata = {
			  startDateTime: $scope.finalStartDate,
			  endDateTime: $scope.finalEndDate
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
  
  $scope.bookRoom=function(roomName){
	  console.log(roomName);
	  var calurl="http://10.222.120.28:3001/bookRoom";
	 var bookRoom={
			 title:$scope.meetingTitle,
			 startDateTime: $scope.finalStartDate,
			 endDateTime: $scope.finalEndDate,
			 roomName:roomName
	 }
	 var parameter = JSON.stringify(bookRoom);
	 console.log(parameter);
	
		$http.post(calurl, parameter).
	    success(function(data, status, headers, config) {
	       console.log(data);
	       $scope.bookRoomStatus=data;
	       alert('Room booked successfully...!!!!!');
	       $window.location.reload();
	      }).
	      error(function(data, status, headers, config) {
	      
	      });
  };
  
  $scope.updateEndTme = function(){
	  var start = [];
	  start = $scope.startTime.split(":");
	  start[1] += 30;
	  $scope.endTime = start[0] + ":" + start[1];
	  
  };
}]);