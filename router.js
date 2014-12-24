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
 });

 Finch.route("settings", function () {
   Settings.read();
 });

 Finch.route("/", function() {
  if(window.localStorage.getItem("vault_settings") == null){
    Finch.navigate("settings");
  }
  else {
    Finch.navigate("list");
  }
 });

 Finch.listen();
});
