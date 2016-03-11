myApp.controller ("sectionController", ["$scope", "$http", function ($scope, $http) {
    $("#modalTitre").hide(100, 'linear');
    $("#modalContenu").hide(100, 'linear');

    var getSection = function (){
        $http.get('data/getMySection.php').
        success(function(data) {
            $scope.titre = data[0].titre;
            $scope.contenu = data[0].contenu;
        });
    };

    getSection.call();


    if (document.cookie.match("admin=true")) {
        $scope.titlePressed = function (){
            $("#modalTitre").show(100, 'linear');
        };

        $scope.updateTitle = function (){
            $scope.titleModal = $scope.titleModal || "Bienvenue chez Mr Everaert, à Trou Des Chiens, nouveaux propriétaires."

            var request = $http({
                method: "post",
                url: "data/sectionTitreController.php",
                data: {
                    title: $scope.titleModal
                },
                headers: { "ContentType": "application/x-www-form-urlencoded" }
            });

            request.success(function(data){
                console.log("Updated !");
                getSection.call();
            });


            $("#modalTitre").hide(100, 'linear');
        };

        $scope.contenuPressed = function (){
            $("#modalContenu").show(100, 'linear');
        };

        $scope.updateContenu = function (){
            $scope.contenuModal = $scope.contenuModal || "La pêcherie du Trou Des Chiens est située sur les hauteurs de Saint-Hubert.Un étang de X hectares alimenté par la rivière de L'Ourthe, l'accès est facile et un parking est à disposition.Les Truites sont élevées localement.Nous vous proposons également une carte de fidelité, location de cannes, vente de petits matériel et appâts.Vous disposez d'une taverne et celle-ci vous propose une petite restauration."

            var request = $http({
                method: "post",
                url: "data/sectionContenuController.php",
                data: {
                    contenu: $scope.contenuModal
                },
                headers: { "ContentType": "application/x-www-form-urlencoded" }
            });

            request.success(function(data){
                console.log("Updated !");
                getSection.call();
            });


            $("#modalContenu").hide(100, 'linear');
        };
    }
}]);
