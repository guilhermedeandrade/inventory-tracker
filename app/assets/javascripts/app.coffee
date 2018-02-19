inventoryTracker = angular.module("inventoryTracker", [
  'templates',
  'ngRoute',
  'ngResource',  
]);

angular.module('inventoryTracker').controller 'usersList', ($scope, $http) ->
  $scope.app = 'Listing users'

  loadUsers = ->
    $http.get('http://localhost:3000/users.json').success (data) ->
      $scope.users = data
      return
    return

  return