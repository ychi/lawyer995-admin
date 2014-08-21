var adminControllers = angular.module('adminControllers', []);

 adminControllers.controller('UserCtrl', ['$scope',function($scope) {
   $scope.ngos = [
      { 'id': 0,
        'name': '司改會',
        'primary_user': 0},
      { 'id': 1,
        'name': 'NG0',
        'primary_user': 1},
      { 'id': 2,
        'name': 'NG1',
        'primary_user':2}
   ];

   $scope.users = [
     { 'mail': 'aaa@aaa.com',
       'name': 'Aaa',
       'cell': '0911-111-111',
       'landline': '02-2111-1111',
       'org': 2},
     { 'mail': 'bbb@bbb.org',
       'name': 'Bbb',
       'cell': '0922-222-222',
       'landline': '03-3333-3333',
       'org': 1},
     { 'mail': 'ccc@ccc.com',
       'name': 'Ccc',
       'cell': '0933-333-333',
       'org': 0}
   ];
   $scope.orderProperty = 'name';

 }]);

adminControllers.controller('AttorneyCtrl', ['$scope',function($scope){

}]);

adminControllers.controller('CaseCtrl', ['$scope', function($scope){

}]);
