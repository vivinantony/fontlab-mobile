angular.module('tltApp')

.controller('BoardCtrl', function($scope, $ionicHistory) {
    $ionicHistory.nextViewOptions({
        disableBack: true
    });
    $scope.toggleFooter = function(val) {
        console.log(val);
        switch (val) {
            case 'footer1':
                $scope.footer1 = !$scope.footer1;
                $scope.footer2 = false;
                $scope.footer3 = false;
                $scope.footer4 = false;
                $scope.footer5 = false;
                break;
            case 'footer2':
                $scope.footer2 = !$scope.footer2;
                $scope.footer1 = false;
                $scope.footer3 = false;
                $scope.footer4 = false;
                $scope.footer5 = false;
                break;
            case 'footer3':
                $scope.footer3 = !$scope.footer3;
                $scope.footer1 = false;
                $scope.footer2 = false;
                $scope.footer4 = false;
                $scope.footer5 = false;
                break;
            case 'footer4':
                $scope.footer4 = !$scope.footer4;
                $scope.footer1 = false;
                $scope.footer2 = false;
                $scope.footer3 = false;
                $scope.footer5 = false;
                break;
            case 'footer5':
                $scope.footer5 = !$scope.footer5;
                $scope.footer1 = false;
                $scope.footer2 = false;
                $scope.footer3 = false;
                $scope.footer4 = false;
                break;
            default:
                return false;
        }
    };
})
