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
  $scope.newAttornies = [
  {'name': 'attorney1',
   'license': 111111,
   'associations': ['新北市', '桃園縣'],
   'location': '台北市',
   'cell': 0970111111,
   'phoneDay': 0970111111,
   'phoneNight': 0970111112,
   'email': 'attterney1@law.com'
  },
  {'name': 'attorney2',
   'license': 222222,
   'associations':['台中縣', '新竹縣', '宜蘭縣'],
   'location': '新竹縣',
   'cell': 0970111222,
   'phoneDay': 0970111222,
   'phoneNight': 0970111222,
   'email': 'attorney2@law.com'
  },
  {'name': 'attorney3',
  'license': 33333,
  'associations': ['高雄市', '臺南市'],
  'location': '高雄市',
  'cell': 0970111333,
  'phoneDay': 0970123333,
  'phoneNight': 0970123333,
  'email': 'attorney3@law.com'
  }
  ];

  $scope.attornies = [{'name': 'attorney4',
   'license': 111114,
   'associations': ['新北市', '桃園縣'],
   'location': '台北市',
   'cell': 0970111111,
   'phoneDay': 0970111111,
   'phoneNight': 0970111112,
   'email': 'attterney4@law.com',
   'numCases': 3,
   'available': true
  },
  {'name': 'attorney5',
   'license': 222225,
   'associations':['台中縣', '新竹縣', '宜蘭縣'],
   'location': '新竹縣',
   'cell': 0970111222,
   'phoneDay': 0970111222,
   'phoneNight': 0970111222,
   'email': 'attorney5@law.com',
   'numCases': 5,
   'available': true
  },
  {'name': 'attorney6',
  'license': 33336,
  'associations': ['高雄市', '臺南市'],
  'location': '高雄市',
  'cell': 0970111333,
  'phoneDay': 0970123333,
  'phoneNight': 0970123333,
  'email': 'attorney6@law.com',
  'numCases': 6,
  'available': true
  }];
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
