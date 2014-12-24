var Interface = (function() {
  var settings = JSON.parse(window.localStorage.getItem("vault_settings"));
  AWS.config.update({accessKeyId: settings.key, secretAccessKey: settings.secret});
  var s3 = new AWS.S3({params: {Bucket: settings.bucket}});

  return {
    list: function (callback) {
      s3.listObjects(function (err, data) {
        if (err) {console.log(err, err.stack);} 
        else {
          var keys = [];
          for (var i = 0; i < data.Contents.length; i++) {
            keys.push(data.Contents[i].Key);
          }
          callback(keys);
        }
      });
    },

    get: function(key, callback) {
      s3.getObject({Key:key}, function (err, data) {
        if (err) {console.log(err, err.stack);} 
        else {callback(data.Body.toString());}
      }); 
    },

    store: function(key, data, callback) {
      s3.putObject({Key:key,Body:data,ContentType:'text/plain'}, function (err, data) {
        if (err) {console.log(err, err.stack);} 
        else {callback();}
      });
    },

    delete: function(key, callback) {
      request = s3.deleteObject({Key:key}, function(err, data) {
        if (err) {console.log(err, err.stack);}
      });         
      request.on('complete', function(response) {
        callback();
      });
      request.send();
    }
  };

})();
