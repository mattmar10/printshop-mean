'use strict';

// Setting up route
angular.module('prints').config(['$stateProvider',
	function($stateProvider) {
		// Prints state routing
		$stateProvider.
		state('listPrints', {
			url: '/prints',
			templateUrl: 'modules/prints/views/list-prints.client.view.html'
		}).
		state('createPrint', {
			url: '/prints/create',
			templateUrl: 'modules/prints/views/create-print.client.view.html'
		});/*.
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		
		});*/
	}
]);