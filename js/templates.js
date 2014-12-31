(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['form.html'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<table>\n  <tr>\n    <td>Passphrase:</td>\n    <td><input type='password' id='secret'></td>\n  </tr>\n  <tr>\n    <td>Website Name:</td>\n    <td><input type='text' id='key'></td>\n  </tr>\n  <tr>\n    <td>UserID:</td>\n    <td><input type='text' id='username'></td>\n  </tr>\n  <tr>\n    <td>Password:</td>\n    <td><input type='text' id='password'></td>\n  </tr>\n  <tr>\n    <td>Notes:</td>\n    <td><textarea rows=3 cols=20 id='notes'></textarea></td>\n  </tr>\n  <tr>\n    <td>\n      <div class='orange_button'>\n        <a href=\"#store\">Save</a>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class='orange_button'>        \n        <a href='#list'>Back to List</a>\n      </div>  \n    </td>\n  </tr>\n</table>\n\n";
  },"useData":true});
templates['list.html'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <tr>\n    <td>	\n      <div class='account'>\n        <table class='account'>\n          <tr>\n            <td class='key'><a href='#get?key="
    + escapeExpression(lambda(depth0, depth0))
    + "'>"
    + escapeExpression(lambda(depth0, depth0))
    + "</a></td>\n            <td class='delete'><a href='#delete?key="
    + escapeExpression(lambda(depth0, depth0))
    + "'>X</a></td>\n          </tr>\n        </table>\n      </div>\n    </td>\n  </tr>	\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table>\n  <tr>\n    <td>\n      <div class='orange_button'>        \n        <a href='#new'>Add New Record</a>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class='orange_button'>        \n        <a href=\"#settings\">Settings</a>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <input type='password' id='secret' placeholder='passphrase' class='passphrase'>\n    </td>\n  </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</table>\n\n";
},"useData":true});
templates['settings.html'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<table>\n  <tr>\n    <td>Amazon Key:</td>\n    <td><input type='text' id='key'></td>\n  </tr>\n  <tr>\n    <td>Amazon Secret:</td>\n    <td><input type='text' id='secret'></td>\n  </tr>\n  <tr>\n    <td>Amazon Bucket:</td>\n    <td><input type='text' id='bucket'></td>\n  </tr>\n  <tr>\n    <td>\n      <div class='orange_button'>\n        <a href='#store-settings'>Save</a>\n      </div>\n    </td>\n  </tr>\n  <tr>  \n    <td>\n      <div class='orange_button'>\n        <a href='#' onclick=\"$('input#secret').val('');Finch.navigate('list');\">Cancel</a>\n      </div>\n    </td>\n  </tr>\n</table>\n";
  },"useData":true});
})();
