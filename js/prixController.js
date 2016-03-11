myApp.controller ("prixController", ["$scope", "$http", function ($scope, $http) {
    $("#modalPrice").hide(100, 'linear');

    var getPrice = function (){
        $http.get('data/getMyPrice.php').
        success(function(data) {
            $scope.prix1 = data[0].prix;
            $scope.prix2 = data[1].prix;
            $scope.prix3 = data[2].prix;
            $scope.prix4 = data[3].prix;
        });
    };

    getPrice.call();

    if (document.cookie.match("admin=true")) {

        $scope.pricePressed = function (id) {
            $("#modalPrice").show(100, 'linear');
            $scope.prixId = id;
        }

        $scope.updatePrice = function () {
            $scope.priceModel = $scope.priceModel || "00.00"

            $("#modalPrice").hide(100, 'linear');
            console.log($scope.prixId);

            var request = $http({
                method: "post",
                url: "data/priceController.php",
                data: {
                    id: $scope.prixId,
                    prix: $scope.priceModel
                },
                headers: { "ContentType": "application/x-www-form-urlencoded" }
            });

            request.success(function(data){
                console.log("Updated !");
                getPrice.call();
            });
        }
    }

}]);
