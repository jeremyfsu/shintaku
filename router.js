$(function() {
 
 Finch.route("list", function() {
  Vault.list();
 });
 
 Finch.route("get", function() {
  Finch.observe(function(params) {  
   return console.log(params('key'));
  });
 });

 Finch.route("/", function() {
  Finch.navigate("list");
 });

 Finch.listen();
});
