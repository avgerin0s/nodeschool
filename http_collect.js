var bl = require("bl");
var http = require("http");

http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    if (err)
      console.error(err);

    d = data.toString();

    console.log(d.length);
    console.log(d);
  }));
});
