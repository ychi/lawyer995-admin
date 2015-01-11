var adminControllers = angular.module('adminControllers', ['adminAPI']);

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

adminControllers.controller('AttorneyCtrl', ['$scope', 'AttorneyInfos', function($scope, AttorneyInfos){
  var loadNewAttorneies = AttorneyInfos.get({status: 0}, function() {
    $scope.newAttornies = loadNewAttorneies.data;
  });

  var loadOnlineAttornies = AttorneyInfos.get({}, function() {
    $scope.attornies = loadOnlineAttornies.data;
  });


  $scope.orderProperty = 'name';

}]);

adminControllers.controller('CaseCtrl', ['$scope', function($scope){
  $scope.cases = [
  {'time': '2014-09-28',
   'name': 'xxx',
   'phone': '0955-555-555',
   'location': '台中市',
   'address': 'xxxXXxx',
   'description': 'xxxxx xxXxx Xxxxx',
   'status': 'pending',
   'note': "noteX",
   'attorney': 5},

  {'time': '2014-09-27',
   'name': 'yyy',
   'phone': '0966-666-666',
   'location': '臺南市',
   'address': 'yyyyYYyyy',
   'description': 'yyyyy yyyyY YYYyy',
   'status': 'closed',
   'note': "noteY",
   'attorney': 3},

  {'time': '2014-09-29',
   'name': 'zzzz',
   'phone': '0977-777-777',
   'location': '台北市',
   'address': 'zzzzzZZzzz',
   'description': 'zzzzzZZ zzzzZZz',
   'status': 'inProgress',
   'note': "noteZ",
   'attorney': 1},

  {'time': '2014-09-29',
   'name': 'www',
   'phone': '0988-888-888',
   'location': 'Keelung',
   'address': 'ww WWwwwwW',
   'description': 'wwwwww wwwW',
   'status': 'inProgress',
   'note': "noteW",
   'attorney': null}];

}]);
