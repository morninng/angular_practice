
'use strict';

/* Controllers */

var eventControllers = angular.module('eventControllers', []);

eventControllers.controller('EventListCtrl', ['$scope',
    function EventListCtrl($scope) {

        $scope.eventList = new Array();

    
        console.log($scope);
        var Event = Parse.Object.extend("Event");
        var event_query = new Parse.Query(Event);
        event_query.find({
          success: function(results) {
   
            for(var i=0; i<results.length; i++ ){
                var obj = new Object();
                obj.id=results[i].id;
                obj.date=results[i].get("date_time");
                obj.title=results[i].get("title");
                $scope.eventList.push(obj);
            }
            $scope.$apply()
          },
          error: function(error) {
            alert("no event data found");
          }
        });
    }]);
/*
eventControllers.controller('BlogViewCtrl', ['$scope', '$routeParams', 'BlogPost',
    function BlogViewCtrl($scope, $routeParams, BlogPost) {
        var blogId = $routeParams.id;
        $scope.blg = 1;
        BlogPost.get({id: blogId},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.blogEntry = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );

    }]);

*/
