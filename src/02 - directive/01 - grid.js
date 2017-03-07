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
                hasBasicActions: '=?',
                basicActions: '=?',
                hasMultiSelect: '=?',
                uniqueField: '@?',
                pageSizeList: '=?',
                defaultPageSize: '=?',
                hasAdd: '=?',
                addProperties: '=?'
            },
            controller: ['$scope', '$rootScope', 'PageSizes', function($scope, $rootScope, PageSizes){
                $scope.model = {
                    search: '',
                    pageSizeList: angular.isDefined($scope.pageSizeList) ? $scope.pageSizeList : PageSizes,
                    pageSize: angular.isDefined($scope.defaultPageSize) ? $scope.defaultPageSize : 10
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