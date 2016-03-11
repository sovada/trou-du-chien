myApp.controller("logout", ["$scope", "$http", function ($scope, $http) {
    $scope.logout = function () {

        $http.get('data/logout.php').
        success(function(data) {
            console.log("done");
        });
    }

    if (document.cookie.match("admin=true")) {
        $("#connected").hide();
        $("#disconected").show();
    } else {
        $("#disconected").hide();
        $("#connected").show();
    }
}]);
