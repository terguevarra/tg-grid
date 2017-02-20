/*! 
 PROJECT: tg-grid 
 VERSION: 1.0.0 
 AUTHOR: Ruther John Guevarra 
 GITHUB: https://github.com/terguevarra/
 LATEST BUILD DATE AND TIME: February 20, 2017 12:47 PM PHILIPPINE TIME*/
(function(){
    'use strict';

    var moduleName = 'tgGrid';

    var appDependencies = [];

    angular.module(moduleName, appDependencies);
})();
(function(){
    'use strict';

    angular
        .module('tgGrid')
        .run(['$rootScope', function($rootScope){
            $rootScope.tgUtils = {
                keys: Object.keys,
                angular: angular
            }
        }])
})();
(function(){
    'use strict';

    angular
        .module('tgGrid')
        .directive('tgGrid', grid);

    grid.$inject = [];

    function grid(){
        return {
            restrict: 'E',
            scope: {
                gridTemplateUrl: '@',
                collection: '=',
                headers: '@?',
                fields: '@?',
                gridId: '@',
                hasSearch: '=?',
                hasPageSize: '=?',
                hasBasicAction: '=?',
                hasBasicActions: '=?',
                basicActions: '=?'
            },
            controller: ['$scope', '$rootScope', function($scope, $rootScope){
                $scope.model = {
                    search: '',
                    pageSizeList: [5,10,15,20],
                    pageSize: 5
                }

                $scope.OnClick_BasicAction = OnClick_BasicAction;

                function OnClick_BasicAction(key, action, item){
                    console.log(key);
                    console.log(action);
                    console.log(item);
                    if(angular.isDefined(action[key].click)){
                        action[key].click(item);
                    }
                }
            }],
            template: '<div ng-include="gridTemplateUrl"></div>'
        }
    }
})();