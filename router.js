$(function() {
 
 Finch.route("list", function() {
  Vault.list();
 });
 
 Finch.route("/", function() {
  Finch.navigate("list");
 });

 Finch.listen();
});
