var Interface = (function() {
  var aws_access_id = "";
  var aws_secret = "";

  return {
    list: function () {
      return new Array("first", "second", "third");
    },

    get: function(key) {
      return "U2FsdGVkX1+NpqNbylpuPAFHnL5jZtcgNwktEszpDkBIm8SiOoZV+RMOUaZUMYa3/mmsrjliE/6OtkGvC2xGQwqLgww+wptwK3f1FufwVEE="
    },

    store: function(key, data) {
      console.log(key+" "+data);
    },

    delete: function(key) {
      console.log("delete " + key);
    }
  };

})();
