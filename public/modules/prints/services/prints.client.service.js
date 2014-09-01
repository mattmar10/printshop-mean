'use strict';

//Prints service used for communicating with the prints REST endpoints
angular.module('prints').factory('Prints', ['$resource',
	function($resource) {
		return $resource('prints/:printId', {
			printId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);