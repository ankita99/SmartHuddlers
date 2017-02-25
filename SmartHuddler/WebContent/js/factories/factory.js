conferenceApp.factory('CalendarFactory', ['$resource', function($resource){
    return $resource(CONSTANTS.BASEURL+CONSTANTS.CALENDAR_API,{roomId:'@roomId'},{
        save :{
            method:'POST',
            headers:{'Content-Type':'application/json;charset=UTF-8'}
        }
    });
}]);


/*conferenceApp.factory('CalendarFactory', ['$resource', function($resource){
    return $resource(CONSTANTS.BASEURL+CONSTANTS.CALENDAR_API+"/:roomid",{},{
        save :{
            method:'POST',
            headers: {'Content-Type': undefined},
			transformResponse:[function(data) {
                return { response: data };
            }]
        }
    });
}]);*/

conferenceApp.factory('Status', ['$resource', function($resource){
    return $resource(CONSTANTS.BASEURL+CONSTANTS.STATUS_API);
}]);

conferenceApp.factory('BookRoom', ['$resource', function($resource){
    return $resource(CONSTANTS.BASEURL+CONSTANTS.CUST_API);
}]);

conferenceApp.factory('BookRoom', ['$resource', function($resource){
    return $resource(CONSTANTS.CALENDARURL+CONSTANTS.CALENDAR_API,{startDateTime:'@startDateTime'}, {endtDateTime:'@endtDateTime'},{
        save :{
            method:'POST',
            headers:{'Content-Type':'application/json;charset=UTF-8'}
        }
    });
}]);

conferenceApp.factory('Adhoc', ['$resource', function($resource){
    return $resource(CONSTANTS.BASEURL+CONSTANTS.ADHOC_API);
}]);
