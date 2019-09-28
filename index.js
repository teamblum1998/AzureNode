const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Monique... This is the first step!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
