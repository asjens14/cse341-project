const http = require('http');

const routes = require('./prove01-routes.js');

const server = http.createServer(routes);

server.listen(3000);