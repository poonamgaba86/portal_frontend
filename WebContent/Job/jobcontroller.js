app.controller('JobController',function($scope,$location,JobService){
	$scope.saveJob=function(){
		JobService.saveJob($scope.job)
		.then(function(response){
			$location.path('/getAllJobs')
		},function(response){
			$scope.errorMessage=response.data.message
			$location.path('/addJob')
		})
	}
	
	function getAllJobs(){
		$scope.showJobDetails=false
		JobService.getAllJobs()
		.then(function(response){
			$scope.jobs=response.data
		},function(response){
			console.log(response.status)
		})
	}
	
	$scope.jobDetail=function(id){
		$scope.showJobDetails=true
		JobService.getJobDetail(id)
		.then(function(response){
			$scope.job=response.data
		},function(){
			console.log(response.status)
		})
		
	}
	
	getAllJobs()
})