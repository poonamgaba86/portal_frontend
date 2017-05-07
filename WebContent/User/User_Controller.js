app.controller('UserController',function($scope,$location,UserService,$rootScope,$cookieStore){
	//$scope.message=''
	/*function getAllPersons(){
	  $scope.persons=UserService.getAllPersons()
	  .then(function(response) {
		  console.log(response.status)
		  console.log(response.data)
		  $scope.persons=response.data;
	  },function(response) {
		  console.log(response.status);
	  }  )
	  }*/
	
	
	$scope.registerUser=function(){
		UserService.registerUser($scope.user)
		.then(function(response){
			console.log(response.status);
			console.log(response.data)
			$scope.message="Registered Successfully... Please login again"
			$location.path('/Login')
		},function(response){
			console.log(response.status);
			console.log(response.data)
			$scope.message=response.data.message
			$location.path('/Register')
			
		})
		
	}
	
	$scope.login=function(){
		console.log("login method called")
		UserService.login($scope.user)
		.then(function(response){
			console.log(response.status)
			$scope.user=response.data
			$rootScope.currentUser=response.data;
			$cookieStore.put("currentUser",response.data)
			$location.path('/Home')
		},function(response){
			console.log(response.status)
			$scope.message=response.data.message
			$location.path('/Login')
		})
	}
	

	//getAllPersons();
	  
	})