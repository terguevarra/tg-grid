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