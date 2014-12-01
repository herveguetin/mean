'use strict';

// A provider to create routes dynamically
angular.module('post').provider('moduleRoutes', function ModuleRoutesProvider($stateProvider) {

    var _this = this;

    this.states = ['list', 'view'];
    this.statesData = [];

    this.createRoutes = function(module) {

        angular.forEach(_this.states, function(state) {
            var stateObj = {
                name: module + '.' + state,
                url: '/' + state,
                templateUrl: 'modules/' + module + '/views/' + state + '.client.view.html'
            }

            _this.statesData.push(stateObj);

            $stateProvider.state(stateObj.name, stateObj);
        });
    }

    this.$get = function() {
        return {
            states: this.statesData
        }
    }
});