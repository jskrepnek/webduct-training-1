var app = angular.module('app', []);

app.controller('WidgetsController', ['$scope',
    function($scope) {
        $scope.widgets = [{
            name: 'Dish Antenna',
            description: 'Zonec id elit non mi porta gravida at eget metus.',
            thumbNailSrc: 'Dish-Antenna-128.png',
            cost: 45
        }, {
            name: 'Loud Speaker',
            description: 'Borbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            thumbNailSrc: 'Loud-Speaker-128.png',
            cost: 20
        }, {
            name: 'iPad',
            description: 'Taecenas sed diam eget risus varius blandit sit amet non magna.',
            thumbNailSrc: 'iPad-128.png',
            cost: 56
        }];

        $scope.orderByField = 'name';
    }
]);
