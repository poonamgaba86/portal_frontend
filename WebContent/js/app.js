var app=angular.module('myapp',['ngRoute','ngCookies']);
app.config(function($routeProvider)
{
	$routeProvider
		
	.when('/Register',
			{templateUrl:'User/Register1.html',
		controller: 'UserController'})
		
	.when('/Home',
			{templateUrl:'pages/Home.html' })
			
	.when('/Login',
			{
				templateUrl:'User/Login.html',
				controller: 'UserController'})
		.when('/ListOfUser',
			{
				templateUrl:'pages/ListOfUser.html',
					controller: 'UserController'})
		.when('/profilepic',
			{
				templateUrl:'User/profilepic.html'
					})
		.when('/edituser',
				{
    	templateUrl:'User/edituserform.html',
    	controller:'EditController'
    })
    
    .when('/addJob',{
    	templateUrl:'Job/jobform.html',
    	controller:'JobController'
    })
    .when('/getAllJobs',{
    	templateUrl:'Job/getjobtitles.html',
    	controller:'JobController'
    })
    .when('/addPost',{
    	templateUrl:'blog/blogform.html',
    	controller:'BlogController'
    })
    	.when('/getAllBlogs',{
    		controller:'BlogController',
    		templateUrl:'blog/blogList.html'
    	})
    	.when('/getBlogDetail/:id',{
    		controller:'BlogDetailController',
    		templateUrl:'blog/getBlogDetail.html'
    	})
    	.when('/getBlogForApproval/:id',{
    	templateUrl:'blog/getBlogForApproval.html',
    	controller:'BlogDetailController'
    })
     .when('/getAllUsers',{
    	templateUrl:'friend/userslist.html',
    	controller:'FriendController'
    })
    .when('/pendingRequests',{
    	templateUrl:'friend/pendingRequests.html',
    	controller:'FriendController'
    })
					
})				
					app.run(function($rootScope,$cookieStore,UserService,$location)
					{
						console.log($rootScope.currentUser)
						if($rootScope.currentUser==undefined){
							$rootScope.currentUser=$cookieStore.get("currentUser")
							console.log($rootScope.currentUser)}
					
							$rootScope.logout=function()
							{
									delete $rootScope.currentUser
									$cookieStore.remove('currentUser')
									UserService.logout()
									.then(function(response){
										$rootScope.message="Logged out Successfully"
											$location.path('/Login')
										},function(response){
											console.log(response.status)
										
											})
			
					}})
	