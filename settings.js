var Settings = (function () {});

var Settings = {
  read: function() {
    var context = {};
    var template = Handlebars.compile($("#settings-template").html());
    $('#content').html(template(context));
    var settings = JSON.parse(window.localStorage.getItem("vault_settings"));
    $('input#key').val(settings.key);
    $('input#secret').val(settings.secret);
    $('input#bucket').val(settings.bucket);
  },

  store: function() {
    settings = {
      key: $('input#key').val(),
      secret: $('input#secret').val(),
      bucket: $('input#bucket').val()
    };
    window.localStorage.setItem("vault_settings", JSON.stringify(settings));
    alert("Settings saved");
  }
};
