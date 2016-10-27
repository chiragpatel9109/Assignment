var app=angular.module("myApp",[]);

app.controller("myctrl",function($scope){
	
	
	$scope.chirag={};
	$scope.chirag.title="Patel";
	
	$scope.studentmarks=[{
		firstname:"Chirag",
		lastname:"Patel",
		rollno:32
	},
	
	{
		firstname:"Akash",
		lastname:"Patel",
		rollno:30
	},
	
	{
		firstname:"Dhruv",
		lastname:"Patel",
		rollno:34
	
		
	}]
	$scope.country={
			name:"USA",
			fees:"200"
	},{
		
		name:"INDIA",
		fees:"2000"
	}
	
	$scope.student={
			firstname:"Chirag",
			lastname:"Patel",
			rollno:34,
			fees:200,
             fullname:function(){
				
				var studentfull=$scope.student;
				return studentfull.firstname +" "+studentfull.lastname;
	}
	}
	
	
	
});


