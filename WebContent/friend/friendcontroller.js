app.controller('FriendController',function($scope,$location,FriendService){
	$scope.friendRequest=function(username){
		FriendService.sendFriendRequest(username)
		.then(function(response){
			alert("Friend request has been sent to " + username)
			getAllUsers();
			$location.path("/getAllUsers")
		},function(response){
			console.log(response.status)
		})
	}
	
	$scope.pendingLists=FriendService.pendingRequests()
	.then(function(response){
		$scope.pendingLists=response.data;
	},function(response){
		console.log(response.status)
	})
	
	
	
	function getAllUsers(){
		$scope.usersList=FriendService.getAllUsers()
		.then(function(response){
			$scope.usersList=response.data
			console.log(response.data)
		},function(response){
			console.log(response.status)
		})
	}
	
	getAllUsers();
})