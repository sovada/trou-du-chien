admin.controller ("adminController", ["$scope", "$http","$cookies", function ($scope, $http, $cookies) {
    $scope.connexion = function (){

        $http.get('../data/connexion.php').
        success(function(data) {
            //$scope.email = data[0].email;
            if ($scope.email == data[0].email && $scope.password == data[0].password) {
                window.location.href = "../data/cookies.php";
                //this.document.cookie = 'admin=true; expires=Mon, 1 Mar 2010 00:00:00 UTC; path=/'
            } else {
                console.log("No puedes Cabron !");
            }
        });
    };

}]);
