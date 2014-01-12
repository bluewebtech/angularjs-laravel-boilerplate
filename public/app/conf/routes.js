
var routes = {

	"/": {
		controller: "Index", 
		view: "index"
	}, 
	"/respect": {
		controller: "Respect", 
		view: "respect"
	},  
	"/error": {
		controller: "Error", 
		error: "404", 
		view: "error"
	}

}