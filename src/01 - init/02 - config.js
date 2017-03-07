(function(){
    'use strict';

    angular
        .module('tgGrid')
        .config(['$logProvider', function($logProvider){
            $logProvider.debugEnabled(true);
        }])
})();