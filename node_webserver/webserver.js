var http = require("http");

function handleRequest(request, response) {
  console.log('a request was made');
  response.write('you have hit the server! \n' );
  response.end('it works! path hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(8080, function() {
  console.log('server is listening on port 8080');
});
