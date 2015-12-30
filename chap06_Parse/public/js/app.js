'use strict';

/* App Module */


var parse_app_id = "EWPPdrDVaAIqhRazWp8K0ZlmafAAPt93JiOAonvX";
var parse_js_key = "US6Lheio8PGcBdIpwGFhFSQVpi5GKunGf6hGq5Ze";
Parse.initialize(parse_app_id, parse_js_key);

var mixideaApp = angular.module('mixideaApp', [
    'ngRoute',     
    'eventControllers'
    /*,'blogServices'*/
]);


mixideaApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/eventList.html',
                    controller: 'EventListCtrl'
                })
                .when('/event/:id', {
                    templateUrl: 'partials/eventContext.html',
                    controller: 'EventContextCtrl'
                });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);

