const http = require('http');
const app = require('./app');
const { port } = require('./config/index');

const server = http.createServer(app);

//server.listen(port);