inventoryTracker = angular.module("inventoryTracker", [
  'templates',
  'ngRoute',
  'ngResource'
]);

angular.module("inventoryTracker").controller("usersList", ["$scope", "$http", function ($scope, $http) {
  $scope.app = "Testing AngularJS";
  $scope.users = [];

  $http({
    method: 'GET',
    url: 'https://inventory-tracker-andrade.herokuapp.com/users.json' //usando localhost nao vai funcionar com heroku
  }).then(function successCallback(response) {
      $scope.users = response.data; // this is gonna access all the data from the JSON
      $scope.firstUser = response.data[0].email; // this is gonna access the email of the first user
    }, function errorCallback(response) {
      console.log("getUsers");
    });
}]);

angular.module("inventoryTracker").controller("categoriesList", ["$scope", "$http", function ($scope, $http) {
  $scope.categories = [];

  $http({
    method: 'GET',
    url: 'https://inventory-tracker-andrade.herokuapp.com/categories.json'
  }).then(function successCallback(response) {
    $scope.categories = response.data;
  }, function errorCallback(response) {
    console.log("getCategories");
  });
}]);

angular.module("inventoryTracker").controller("productsList", ["$scope", "$http", function ($scope, $http) {
  $scope.products = [];

  $http({
    method: 'GET',
    url: 'https://inventory-tracker-andrade.herokuapp.com/products.json'
  }).then(function successCallback(response) {
    $scope.products = response.data;
  }, function errorCallback(response) {
    console.log("getProducts");
  });
}]);
