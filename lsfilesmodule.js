var fs = require("fs");
var path = require("path");

module.exports = function(directory, extension, callback) {
  var files = [];
  var i = 0;

  fs.readdir(directory, function(err, list) {
    if(err) {
      return callback(err);
    }

    list.forEach(function (file) {
      if (path.extname(file) === "." + extension)
        files[i] = file
        i++;
    });
    return callback(null, files);
  });
}
