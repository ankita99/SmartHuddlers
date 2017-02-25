
conferenceApp.factory('Adhoc', ['$resource', function($resource){
    return $resource(CONSTANTS.BASEURL+CONSTANTS.ADHOC_API);
}]);
