myApp.controller ("horaireController", ["$scope", "$http", function ($scope, $http) {
    $("#modalHoraire").hide(100, 'linear');

    var getHoraire = function (){
        $http.get('data/getMyHoraire.php').
        success(function(data) {
            $scope.lundiOuverture = data[0].ouverture
            $scope.lundiFermeture = data[0].fermeture

            $scope.mardiOuverture = data[1].ouverture
            $scope.mardiFermeture = data[1].fermeture

            $scope.mercrediOuverture = data[2].ouverture
            $scope.mercrediFermeture = data[2].fermeture

            $scope.jeudiOuverture = data[3].ouverture
            $scope.jeudiFermeture = data[3].fermeture

            $scope.vendrediOuverture = data[4].ouverture
            $scope.vendrediFermeture = data[4].fermeture

            $scope.samediOuverture = data[5].ouverture
            $scope.samediFermeture = data[5].fermeture

            $scope.dimancheOuverture = data[6].ouverture
            $scope.dimancheFermeture = data[6].fermeture
        });
    };

    getHoraire.call();

    if (document.cookie.match("admin=true")) {

        $scope.horairePressed = function (closedOrNot, day) {
            $("#modalHoraire").show(100, 'linear');
            $scope.closedOrNot = closedOrNot;
            $scope.day = day;
        }

        $scope.updateHoraire = function () {
            $scope.horaireModel = $scope.horaireModel || "closed"

            if ($scope.closedOrNot === "ouverture") {
                var request = $http({
                    method: "post",
                    url: "data/horaireOuvertureController.php",
                    data: {
                        jour: $scope.day,
                        horaire: $scope.horaireModel
                    },
                    headers: { "ContentType": "application/x-www-form-urlencoded" }
                });

                request.success(function(data){
                    console.log("Updated !");
                    getHoraire.call();
                });
            } else {
                var request = $http({
                    method: "post",
                    url: "data/horaireFermetureController.php",
                    data: {
                        jour: $scope.day,
                        horaire: $scope.horaireModel
                    },
                    headers: { "ContentType": "application/x-www-form-urlencoded" }
                });

                request.success(function(data){
                    console.log("Updated !");
                    getHoraire.call();
                });
            }

            $("#modalHoraire").hide(100, 'linear');


        }
    }

}]);
