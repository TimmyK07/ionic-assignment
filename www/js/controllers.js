angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('FoodCtrl', function($scope, Foods) {
  $scope.foods = Foods.all();
  $scope.remove = function(food) {
    Foods.remove(food);
  }
})


.controller('ActivityCtrl', function($scope, Foods) {
  $scope.foods = Foods.all();
  $scope.remove = function(food) {
    Foods.remove(food);
  }
})

.controller('FoodListCtrl', function($scope, $stateParams, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
})


.controller('ActivityListCtrl', function($scope, $stateParams, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
})

.controller('ResetCtrl', function($scope) {
  $scope.settings = {
    resetCounter: true
  };

});





