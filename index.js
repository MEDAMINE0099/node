require('dotenv').config()
var http = require('http');


console.log(process.env.mongourl)


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

