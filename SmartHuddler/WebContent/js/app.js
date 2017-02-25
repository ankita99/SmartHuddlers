	// create the module and name it scotchApp
	var conferenceApp = angular.module('conferenceApp', ['ngRoute', 'ui.router','ngResource','ngMaterial', 'mdPickers']);

	// configure our routes
	conferenceApp.config(function($routeProvider, $mdThemingProvider) {
		
		//create application theme
		  $mdThemingProvider.theme('default')
		    .primaryPalette('blue', {
		      'default': '900', // by default use shade 400 from the pink palette for primary intentions
		      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
		      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
		      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
		    })
		    // If you specify less than all of the keys, it will inherit from the
		    // default shades
		    .accentPalette('red', {
		      'default': '400',
		    	  'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
			      'hue-2': '600'// use shade 200 for default, and keep all other shades the same
		    })
		    .backgroundPalette('grey', {
		      'default': '100' // use shade 200 for default, and keep all other shades the same
		    });
		  
		  $mdThemingProvider.theme('altTheme')
		    .primaryPalette('green'); // specify primary color, all
		                            // other color intentions will be inherited
		                            // from default
		
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'js/partials/adhoc.html',
				controller  : 'adhocController'
			})
			.when('/book', {
				templateUrl : 'js/partials/book.html',
				controller  : 'bookController'
			})
			// route for the about page
			.when('/cancel', {
				templateUrl : 'js/partials/cancel.html',
				controller  : 'cancelController'
			})

			// route for the contact page
			.when('/adhoc', {
				templateUrl : 'js/partials/adhoc.html',
				controller  : 'adhocController'
			});
	});