var Interface = (function() {
     var aws_access_id = "";
     var aws_secret = "";

  return {
	list: function () {
		return new Array("first", "second", "third");
	},
	
	get: function(key) {
		return "value for " + key;
	},

	delete: function(key) {
		console.log("delete " + key);
	}
  };

})();
