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