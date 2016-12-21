
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
        $scope.amount;
        $scope.result;
        $scope.a=0;
        $scope.b=0;
        $scope.convertor=[];
        $http.get("http://www.apilayer.net/api/live?access_key=b880903e600ee56ca391965f01306bb8&format=1")
                .then(function (response) {
                    $scope.myWelcome = response.data;
                    angular.forEach(response.data.quotes, function (key, value) {
                        var change =value.replace("USD","");
                        $scope.convertor.push(change);
                    })
                });
        $scope.convert_curr= function(base,source) {
            $http.get("http://www.apilayer.net/api/live?access_key=b880903e600ee56ca391965f01306bb8&format=1")
                    .then(function (response) {
                        $scope.myWelcome = response.data;
                        base="USD".concat(base);
                        source="USD".concat(source);
                        angular.forEach(response.data.quotes, function (key, value) {
                            if(value==base)
                            {
                                $scope.a=key;
                            }
                            if(value==source)
                            {
                                console.log("-----00000000");
                                $scope.b=key;
                            }
                        })
                        $scope.result = ($scope.amount * $scope.b) / $scope.a;
                    });
        }
    });