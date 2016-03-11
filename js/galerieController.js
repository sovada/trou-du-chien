galerie.controller ("galerieController", ["$scope", "$http", function ($scope, $http){
    $(".thumbnail").show();
    $(".photoShow").hide();
    $("#formAlbum").hide();
    $("#addPhoto").hide();


    var getAlbum = function (){
        $http.get('../data/getMyAlbum.php').success (function (data) {
            $scope.albumTitre = data;
        });
    }

    getAlbum.call();

    $scope.getPhoto = function (idAlbum) {
        $(".thumbnail").hide();

        $("#addAlbum").hide();

        var request = $http({
            method: "post",
            url: "../data/getMyPhoto.php",
            data: {
                id: idAlbum
            },
            headers: { "ContentType": "application/x-www-form-urlencoded" }
        });

        request.success(function(data){
            $(".photoShow").show();
            $scope.photo = data;

        });

    }

    $scope.backAlbum = function () {
        $(".photoShow").hide();
        $(".thumbnail").show();

        if (document.cookie.match("admin=true")) {
            $("#addAlbum").show();

        } else {
            $("#addAlbum").hide();
        }
    }

    if (document.cookie.match("admin=true")) {
        $("#addAlbum").show();
        $("#addPhoto").show();
        $scope.addAlbum = function () {
            $("#formAlbum").show();
        }

        $scope.validationAlbum = function () {
            //console.log($scope.addAlbumModel);

            var request = $http({
                method: "post",
                url: "../data/addAlbum.php",
                data: {
                    titre: $scope.addAlbumModel
                },
                headers: { "ContentType": "application/x-www-form-urlencoded" }
            });

            request.success(function(data){
                $("#formAlbum").hide();
                getAlbum.call();
            });

        }
    } else {
        $("#addAlbum").hide();
        $("#formAlbum").hide();
    }

}]);
