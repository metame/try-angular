var app = angular.module('littleSketcher',["ngResource", "ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "tpl/index.html",
        controller: "rootCtrl"
    })
    .when('/drawings', {
        templateUrl: "tpl/drawings.html",
        controller: "drawingListCtrl"
    })
    .when('/drawings/new', {
        templateUrl: "tpl/drawings_create.html",
        controller: "drawingCreateCtrl"
    })
    .when('/drawings/:id', {
        templateUrl: "tpl/drawings_create.html",
        controller: "drawingCreateCtrl"
    });
});

app.factory('DrawingResource', function($resource){
    var DrawingResource = $resource("/api/drawings/:id",{id: "@id"});
    return DrawingResource;
});

app.controller('drawingCreateCtrl', function($scope){
   $scope.drawing = {
    name: "new drawing"
  } 
});

app.controller('drawingListCtrl', function($scope, DrawingResource){
    $scope.drawings = DrawingResource.query();
    
    $scope.addDrawing = function(){
        var newDrawing = new DrawingResource();
        newDrawing.$save();
        $scope.drawings.push(newDrawing);
    };
    
    
    $scope.remove = function(drawing) {
        var didRemove = drawing.$remove();
        didRemove.then(function() {
            var index = $scope.drawings.indexOf(drawing);
            $scope.drawings.splice(index, 1);
        }, function(err){
            alert("Oh no, couldn't remove because: \n" + JSON.stringify(err));
        });
    };
});