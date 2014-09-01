'use strict';

angular.module('prints').controller('PrintsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Prints',
	function($scope, $stateParams, $location, Authentication, Prints) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var print = new Prints({
				title: this.title,
				description: this.description
			});
			print.$save(function(response) {
				$location.path('prints/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(print) {
			if (print) {
				print.$remove();

				for (var i in $scope.prints) {
					if ($scope.prints[i] === print) {
						$scope.prints.splice(i, 1);
					}
				}
			} else {
				$scope.print.$remove(function() {
					$location.path('prints');
				});
			}
		};

		$scope.update = function() {
			var print = $scope.print;

			print.$update(function() {
				$location.path('prints/' + print._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.prints = Prints.query();
		};

		$scope.findOne = function() {
			$scope.print = Prints.get({
				printId: $stateParams.printId
			});
		};
	}
]);