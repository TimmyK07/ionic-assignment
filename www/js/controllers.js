//modules are where our app's components live - defined here by its controllers
angular.module('starter.controllers', [])//mod for controllers
/*controllers help us get the data on the page and define behaviour.
The data objects or scope are stored in data.js*/
.controller('HomeCtrl', function($scope) {})
//controller for tab-food.html used to list food objects onto the page
.controller('FoodCtrl', function($scope, Foods) {
  $scope.foods = Foods.all();
  $scope.remove = function(food) {
    Foods.remove(food);
  }
})

//controller for tab-activity.html used to list food objects onto the page
.controller('ActivityCtrl', function($scope, Foods) {
  $scope.foods = Foods.all();
  $scope.remove = function(food) {
    Foods.remove(food);
  }
})
//controller for food-list.html used to get/display properties of food objects onto the page
.controller('FoodListCtrl', function($scope, $stateParams, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
})

//controller for activity-list.html used to get/display properties of food objects onto the page
.controller('ActivityListCtrl', function($scope, $stateParams, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
})
//controller for tab.reset.html page and define initial state of toggle
.controller('ResetCtrl', function($scope) {
  $scope.settings = {
    resetCounter: true
  };

});





