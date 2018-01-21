myApp.controller('ViewCtrl',['$rootScope','$scope', function($rootScope,$scope){
	 $rootScope.DetailsList = [];
	 $scope.DetailList = [];  

	 $scope.emp = {};

	 $scope.angularRoutingDemo = "Angular Routing Example";
	 //Saves the data
     $scope.saveDetails = function () {
                $scope.emp = {  
                    fname: $scope.fname,  
                    lname: $scope.lname,  
                    mobile: $scope.mobile 
                };  
                $rootScope.DetailsList.push($scope.emp);
                $scope.DetailList = $rootScope.DetailsList;
                $scope.clearForm();
            } 

            $scope.clearForm = function(){
            	$scope.fname = '';
            	$scope.lname = '';
            	$scope.mobile = '';
            }
}]);
