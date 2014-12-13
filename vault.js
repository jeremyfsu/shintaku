var Vault = (function () {});

var Vault = {
  list: function() {
    secret = $('input#secret').val();
    results = Interface.list();
    var context = {results: results};
    var template = Handlebars.compile($("#list-template").html());
    $('#content').html(template(context));
    $('input#secret').val(secret);
  },

  new: function() {
    secret = $('input#secret').val();
    var template = Handlebars.compile($("#form-template").html());
    $('#content').html(template());
    $('input#secret').val(secret);
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
    secret = $('input#secret').val();
    encrypted = Interface.get(key);
    try {
      decrypted = GibberishAES.dec(encrypted, secret);
      record = JSON.parse(decrypted);  
      var template = Handlebars.compile($("#form-template").html());
      $('#content').html(template());
      $('input#secret').val(secret);
      $('input#key').val(key);
      $('input#username').val(record.username);
      $('input#password').val(record.password);
      $('textarea#notes').val(record.notes);
    }
    catch(e) {
      alert(e);
      Finch.navigate("list");
    }
  },

  delete: function(key) {
    if(confirm("Are you sure that you want to delete the record for " + key + "?")) {
      Interface.delete(key);
      Finch.navigate("list");
    }
  }
};

