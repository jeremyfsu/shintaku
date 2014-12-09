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
  encrypted = GibberishAES.enc(JSON.stringify(record), $('input#secret').val());
  Interface.store($('input#key').val(), encrypted);
  Finch.navigate("list");
 },

 get: function(key) {
  encrypted = Interface.get(key,$('input#secret').val());
  try {
   decrypted = GibberishAES.dec(encrypted, $('input#secret').val());
   record = JSON.parse(decrypted);  
   console.log(record);
  }
  catch(e) {
   alert(e);
  }
 },

 delete: function(key) {
  if(confirm("Are you sure that you want to delete the record for " + key + "?")) {
   Interface.delete(key);
  }
 }
};
