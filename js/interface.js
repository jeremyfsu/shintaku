var Interface = (function() {
  if(window.localStorage.getItem("vault_settings")!=null) {
    var settings = JSON.parse(window.localStorage.getItem("vault_settings"));
    AWS.config.update({accessKeyId: settings.key, secretAccessKey: settings.secret});
    var s3 = new AWS.S3({params: {Bucket: settings.bucket}});

    return {
      list: function (callback) {
        request = s3.listObjects();
        request.on('complete', function(response) {
          if (response.error) {
            console.log(response.error.message, response.error.stack);
            callback(null);
          } 
          else {
            var keys = [];
            for (var i = 0; i < response.data.Contents.length; i++) {
              keys.push(response.data.Contents[i].Key);
            }
            callback(keys);
          }
        });
        request.send();
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
        request = s3.deleteObject({Key:key});         
        request.on('complete', function(response) {
          if (response.error) {console.log(response.error.message, response.error.stack);} 
          else {callback();}
        });
        request.send();
      }
    };

  }})();
