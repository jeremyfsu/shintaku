$(function() {
 
 Finch.route("list", function() {
  Vault.list();
 });
 
 Finch.route("get", function() {
  Finch.observe(function(params) {  
   Vault.get(params('key'));
  });
 });

 Finch.route("new", function() {
  Vault.new();
 });
 
 Finch.route("/", function() {
  Finch.navigate("list");
 });

 Finch.listen();
});
