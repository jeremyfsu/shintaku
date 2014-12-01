var Vault = (function () {});

var Vault = {
 list: function() {
  results = Interface.list();
  var context = {results: results};
  var template = Handlebars.compile($("#list-template").html());
  $('#content').html(template(context));
 },

 new: function() {
  var template = Handlebars.compile($("#new-template").html());
  $('#content').html(template());
 },

 store: function() {
  record = {
   'username':$('input#username').val(),
   'password':$('input#password').val(),
   'notes':$('textarea#notes').val()
  };
  console.log(JSON.stringify(record));
 },

 get: function(key) {
  value = Interface.get(key);
  console.log("passphrase="+$('input#secret').val()+"value="+value);
 }
};
