// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{

			title: '318 Penn Road Kennesaw, GA 30144',
			image: 'images/house.png'
		},
		{

			title: '416 Anderson Street Glendora, CA 91740',
			image: 'images/house.png'
		},
		{

			title: '574 Walter Street Chicago, IL 60160',
			image: 'images/house.png'
		},
		{

			title: '8425 Thorne Street Charleston, SC 29406',
			image: 'images/house.png'
		},
		{

			title: '8946 North Drive Merrimack, NH 03054',
			image: 'images/house.png'
		},
		{

			title: '8303 North Arcadia Lane Littleton, CO 80123',
			image: 'images/house.png'
		},
		{

			title: '7553 Ryan Street New Orleans, LA 70115',
			image: 'images/house.png'
		},
		{

			title: '62 Ketch Harbour Road Norwalk, CT 06851',
			image: 'images/house.png'
		},
		{

			title: '1253 Young Street Mcallen, TX 78501',
			image: 'images/house.png'
		},
		{

			title: '661 E. Hilldale Court Shelbyville, TN 37160',
			image: 'images/house.png'
		},
		{
	
			title: '9661 Pheasant Lane Richmond, VA 23223',
			image: 'images/house.png'
		},
		{

			title: '70 Cactus Lane  Rowland, MN 37160',
			image: 'images/house.png'
		},
		{
		
			title: '334 Brown Street Hillsdale, IL 37160',
			image: 'images/house.png'
		},
		{
	
			title: '2 County Ave, NC 28086',
			image: 'images/house.png'
		},
		{
	
			title: '173 E. Maple St. Mount Holly, NJ 08060',
			image: 'images/house.png'
		},
		{

			title: '7351 County Dr. Savage, MN 55378',
			image: 'images/house.png'
		},
		{

			title: '8634 Railroad Road Trumbull, CT 06611',
			image: 'images/house.png'
		}
	
	];


}
