const http = require('http');
const server = http.createServer(function onRequest(request, response){
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write('<h1>Hello world!</h1>');
    response.end(); //need to restart server to apply changes; use ctrl+c
}).listen(3000);
