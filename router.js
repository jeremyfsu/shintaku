$(function() {
 
 Finch.route("list", function() {
  Finch.observe(function(params) {  
    Vault.list(params('secret'));
  });
 });
 
 Finch.route("get", function() {
  Finch.observe(function(params) {  
   Vault.get(params('key'));
  });
 });

 Finch.route("new", function() {
  Vault.new();
 });

 Finch.route("delete", function() {
  Finch.observe(function(params) {  
   Vault.delete(params('key'));
  });
  Finch.navigate("list");
 });

 Finch.route("settings", function () {
   Settings.read();
 });

 Finch.route("/", function() {
  Finch.navigate("list");
 });

 Finch.listen();
});
