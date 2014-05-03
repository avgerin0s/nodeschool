var http = require('http');

var responses = [null, null, null];
var doneCount = 0;
var urls = process.argv.slice(2);

function juggleHttp(i) {
  http.get(urls[i], function(request) {
    var result = "";
    request.setEncoding("utf8");

    request.on("data", function(data) {
      result += data;
    });

    request.on("end", function() {
      responses[i] = result;
      doneCount++;

      if (doneCount == 3) {
        console.log(responses[0]);
        console.log(responses[1]);
        console.log(responses[2]);
      }
    });
  });
}

for (var i = 0; i < 3; i) {
  juggleHttp(i);
}
