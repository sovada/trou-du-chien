myApp.controller("eventController", ["$scope","$http","$cookies", function($scope, $http, $cookies){
    /* Variable initialisation */
    var date   = new Date(),
        month  = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Aôut",
            "Septembre",
            "Octobre",
            "Novembre",
            "Decembre",
        ],
        i     = 0;
        /* end variable initialisation */
        $scope.admin = false;
        // check if is admin
        $("#modalEvent").hide(150, 'linear');


    $scope.numberMonth = (date.getMonth()) +1;
    $scope.month = month[date.getMonth()];
    $scope.textareaModal = "";

    var getEvent = function (){
        $http.get('data/getMyEvent.php').
        success(function(data) {
            $scope.jour1 = data[0].content;
            $scope.jour2 = data[1].content;
            $scope.jour3 = data[2].content;
            $scope.jour4 = data[3].content;
            $scope.jour5 = data[4].content;
            $scope.jour6 = data[5].content;
            $scope.jour7 = data[6].content;
            $scope.jour8 = data[7].content;
            $scope.jour9 = data[8].content;
            $scope.jour10 = data[9].content;
            $scope.jour11 = data[10].content;
            $scope.jour12 = data[11].content;
            $scope.jour13 = data[12].content;
            $scope.jour14 = data[13].content;
            $scope.jour15 = data[14].content;
            $scope.jour16 = data[15].content;
            $scope.jour17 = data[16].content;
            $scope.jour18 = data[17].content;
            $scope.jour19 = data[18].content;
            $scope.jour20 = data[19].content;
            $scope.jour21 = data[20].content;
            $scope.jour22 = data[21].content;
            $scope.jour23 = data[22].content;
            $scope.jour24 = data[23].content;
            $scope.jour25 = data[24].content;
            $scope.jour26 = data[25].content;
            $scope.jour27 = data[25].content;
            $scope.jour28 = data[27].content;
            $scope.jour29 = data[28].content;
            $scope.jour30 = data[29].content;
            $scope.jour31 = data[30].content;
            $scope.jour32 = data[31].content;
            $scope.jour33 = data[32].content;
            $scope.jour34 = data[33].content;
            $scope.jour35 = data[34].content;
            $scope.jour36 = data[35].content;
            $scope.jour37 = data[36].content;
            $scope.jour38 = data[37].content;
            $scope.jour39 = data[38].content;
            $scope.jour40 = data[39].content;
            $scope.jour41 = data[40].content;
            $scope.jour42 = data[41].content;
        });
    };

    getEvent.call();

    var letMyAddOne = function (){
        $scope.jourPressed = function (day){
            $scope.dayID = day;

            $("#modalEvent").show(100, 'linear');
        }

        $scope.addEvent = function (id, content) {
            $scope.textareaModal = $scope.textareaModal || "Aucun événement pour ce jour"
            var request = $http({
                method: "post",
                url: "data/eventController.php",
                data: {
                    id: id,
                    content: $scope.textareaModal
                },
                headers: { "ContentType": "application/x-www-form-urlencoded" }
            });

            request.success(function(data){
                getEvent();
            });


            $("#modalEvent").hide(150, 'linear');

        }
    };

    var adminVerify = function (){
            if (document.cookie.match("admin=true")) {
                $scope.admin = true;
                letMyAddOne.call();
            } else {
                
            }

    };

    adminVerify.call();

    var hiddeDays = function (){
        if ($scope.numberMonth === 1) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
        }else if ($scope.numberMonth === 2) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");
            $("#daysHidde4").addClass("daysHide");
            $("#daysHidde5").addClass("daysHide");
            $("#daysHidde6").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
        }else if ($scope.numberMonth === 3) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");
            $("#daysHidde4").addClass("daysHide");
            $("#daysHidde5").addClass("daysHide");
            $("#daysHidde6").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
            $("#lastDayHide4").addClass("daysHide");
            $("#lastDayHide5").addClass("daysHide");
        }else if ($scope.numberMonth === 4) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
        }else if ($scope.numberMonth === 5) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");
            $("#daysHidde4").addClass("daysHide");
        } else if ($scope.numberMonth === 6){
            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
            $("#lastDayHide4").addClass("daysHide");
            $("#lastDayHide5").addClass("daysHide");
        }else if ($scope.numberMonth === 7) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
        }else if ($scope.numberMonth === 8) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");
            $("#daysHidde4").addClass("daysHide");
            $("#daysHidde5").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
            $("#lastDayHide4").addClass("daysHide");
            $("#lastDayHide5").addClass("daysHide");
            $("#lastDayHide6").addClass("daysHide");
        }else if ($scope.numberMonth === 9) {
            $("#daysHidde1").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
            $("#lastDayHide4").addClass("daysHide");
        }else if ($scope.numberMonth === 10) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
        }else if ($scope.numberMonth === 11) {
            $("#daysHidde1").addClass("daysHide");
            $("#daysHidde2").addClass("daysHide");
            $("#daysHidde3").addClass("daysHide");
            $("#daysHidde4").addClass("daysHide");
            $("#daysHidde5").addClass("daysHide");
            $("#daysHidde6").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
            $("#lastDayHide4").addClass("daysHide");
            $("#lastDayHide5").addClass("daysHide");
            $("#lastDayHide6").addClass("daysHide");
        }else if ($scope.numberMonth === 12) {
            $("#daysHidde1").addClass("daysHide");

            $("#lastDayHide1").addClass("daysHide");
            $("#lastDayHide2").addClass("daysHide");
            $("#lastDayHide3").addClass("daysHide");
        }
    };

    hiddeDays.call($scope.numberMonth);

}]);


// google map, systeme de changement de mois, mini CMS
// galerie de photos
