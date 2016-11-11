var app = angular.module('app', []);

app.controller('listController', function($scope) {

    $scope.items = [
        'Carrots',
        'Pears',
        'Fish',
        'Milk',
        'Bread'
    ];

    $scope.add = function() {
        $scope.items.push($scope.input);
        $scope.input = '';
    };

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    };

});
