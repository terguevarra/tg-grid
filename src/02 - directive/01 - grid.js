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
            controller: ['$scope', '$rootScope', 'PageSizes', '$log', function($scope, $rootScope, PageSizes, $log){
                $scope.model = {
                    collectionList: [],
                    search: '',
                    pageSizeList: angular.isDefined($scope.pageSizeList) ? $scope.pageSizeList : PageSizes,
                    pageSize: angular.isDefined($scope.defaultPageSize) ? $scope.defaultPageSize : 10
                }

                $scope.OnClick_BasicAction = OnClick_BasicAction;
                $scope.colspan = $scope.headers.split(',').length + (angular.isDefined($scope.hasBasicActions) ? 1 : 0);

                function OnClick_BasicAction(key, action, item){
                    if(angular.isDefined(action[key].click)){
                        action[key].click(item);
                    }
                }

                // $scope.$watch('collection', function(){
                //     $log.debug('may nagbago');
                //     $log.debug($scope.collection);
                //     $scope.collectionList = $scope.collection;
                //     if(!$scope.$$phase) {
                //         $log.debug('digest pasok');
                //         $scope.$apply();
                //     }
                // }, true)
            }],
            template: '<div ng-include="gridTemplateUrl"></div>'
        }
    }
})();