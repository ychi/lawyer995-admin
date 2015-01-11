var api = angular.module('adminAPI', ['ngResource']);

api.factory('AttorneyInfos', [
  '$resource', function($resource) {
    return $resource(apiURL + 'lawyer/getAttorneyInfos/:status/', {
      status: '@status'
    });
  }
]);
