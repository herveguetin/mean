'use strict';


angular.module('core').controller('PostController', ['$scope', '$state', 'moduleRoutes',
	function($scope, $state, moduleRoutes) {
        $scope.stateName = $state.current.name;
	}
]);