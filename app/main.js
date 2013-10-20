require("avalon.router", function() {
	
	
	var model = avalon.define('mainContent', function(vm) {
		vm.currPath = ""
	});
	
	
	avalon.router.get("/", function(a) {
		model.currPath = '/index';
	});

	avalon.router.get("/:a", function(a) {
		model.currPath = this.path;
	});

	avalon.history.start({
		basepath: "/"
	});
	avalon.scan();
});