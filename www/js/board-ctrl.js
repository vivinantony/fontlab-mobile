angular.module('tltApp')

.controller('BoardCtrl', function($scope, $ionicHistory, $ionicModal) {
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

    $ionicModal.fromTemplateUrl('templates/addtext-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.boardModal = modal;
    });
    $scope.showBoardModal = function() {
        $scope.boardModal.show();
    };
    $scope.hideBoardModal = function() {
        $scope.boardModal.hide();
    };

    $scope.openModal = function(val) {
        console.log(val);
        $scope.boardModal.show();
        switch (val) {
            case 'foo1':
                return $scope.foo1 = true;
            case 'foo2':
                return $scope.foo2 = true;
            default:
                return false;
        }

    }
})
