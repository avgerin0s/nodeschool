var lsfilesmodule = require("./lsfilesmodule.js");

lsfilesmodule(process.argv[2], process.argv[3], function (err, list) {
  if (err) {
    console.log(err);
    return;
  }

  list.forEach(function (file) {
    console.log(file);
  });
});
