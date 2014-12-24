var Vault = (function () {});

var Vault = {
  list: function() {
    secret = $('input#secret').val();
    Interface.list(function (results) {
      if (results.length > 0) {
        var context = {results: results};
        var template = Handlebars.compile($("#list-template").html());
        $('#content').html(template(context));
        $('input#secret').val(secret);
      }
      else {
        $('#content').html("No records found<br><a href='#new' class='default'>Add New Record</a><br><a href='#settings'>Settings</a>");
      }
    });
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
    Interface.store($('input#key').val(), encrypted, function() {Finch.navigate("list");});
  },

  get: function(key) {
    Interface.get(key, function(data) {
      secret = $('input#secret').val();
      try {decrypted = GibberishAES.dec(data, secret);}
      catch(e) {
        alert(e);
        console.log(e);
        Finch.navigate("list");
      }
      record = JSON.parse(decrypted);  
      template = Handlebars.compile($("#form-template").html());
      $('#content').html(template());
      $('input#secret').val(secret);
      $('input#key').val(key);
      $('input#username').val(record.username);
      $('input#password').val(record.password);
      $('textarea#notes').val(record.notes);
    });
  },

  delete: function(key) {
    secret = $('input#secret').val();
    if(confirm("Are you sure that you want to delete the record for " + key + "?")) {
      Interface.delete(key, function() {Finch.navigate("list");});
    }
  }
};

