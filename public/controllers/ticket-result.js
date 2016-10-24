/**
 * Created by ApisMantis on 10/23/2016.
 */

var ticketResultModule = angular.module('lotusAirline.ticketResults', []);
ticketResultModule.controller('TicketCtrl', ['$scope', '$window', '$http', '$rootScope', '$location', '$timeout',
    function ($scope, $window, $http, $rootScope, $location, $timeout) {

        $scope.currIndex = -1;

        // Booking infor
        $rootScope.bookingInfor = {
            "flights": [],
            "passengers": []
        };

        // Select ticket
        $scope.selectTicket = function ($index, type) {
            if (type == 'depart') {
                $scope.departTicket = $rootScope.departTickets[$index];
                updateFlights($scope.departTicket);
            }
            else {
                $scope.returnTicket = $rootScope.returnTickets[$index];
                updateFlights($scope.returnTicket);
            }

            console.log($scope.bookingInfor);
        };

        // Add new flight to booking infor
        function updateFlights(flight) {
            var newFlight = {
                "code": flight.code,
                "departAt": flight.departAt,
                "arriveAt": flight.arriveAt,
                "priceLevel": flight.priceLevel,
                "class": flight.class
            };

            $scope.bookingInfor.flights.push(newFlight);
        }

        $scope.getTime = function (timestamp) {
            var date = new Date(timestamp);
            var hour = date.getHours();
            var minute = date.getMinutes();

            if (hour < 10) hour = '0' + hour;
            if (minute < 10) minute = '0' + minute;

            return hour + ":" + minute;
        };

        $scope.getDate = function (timestamp) {
            var date = new Date(timestamp);
            var dd = date.getDate();
            var mm = date.getMonth();
            var yyyy = date.getYear();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            return dd + "/" + mm + "/" + yyyy;
        };
    }]);
