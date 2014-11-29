var Vault = (function () {});

var Vault = {
 list: function() {
  results = Interface.list();
  var context = {results: results};
  var template = Handlebars.compile($("#list-template").html());
  $('#content').html(template(context));
 }

};
