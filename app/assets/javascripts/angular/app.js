inventoryTracker = angular.module("inventoryTracker", [
  'templates',
  'ngRoute',
  'ngResource'
]);

angular.module("inventoryTracker").controller("usersList", function ($scope, $http) {
  $scope.app = "Listing users";
  console.log("testando");

  $http({
    method: 'GET',
    url: 'http://localhost:3000/users.json'
  }).then(function successCallback(response) {
      console.log("test-success");
      $scope.users = response.data;
      $scope.firstUser = response.data[0].email; // this is gonna access the email of the first user
    }, function errorCallback(response) {
      console.log("test-error");
    });
});
