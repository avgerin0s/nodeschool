var http = require('http');
var url = require('url');

var port = process.argv[2];

var routes = {
  "/api/parsetime": function(purl) {
    date = new Date(purl.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  },

  "/api/unixtime": function(purl) {
    return { unixtime: new Date(purl.query.iso).getTime() };
  }
}

server = http.createServer(function(req, res) {
  purl = url.parse(req.url, true);
  resource = routes[purl.pathname];
  if (resource) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(resource(purl)));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);

