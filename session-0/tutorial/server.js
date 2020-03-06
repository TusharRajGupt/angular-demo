const exp = require('./backend/express');
const http = require('http');

const port = process.env.PORT || 2300;

exp.set('port', port)
const server = http.createServer(exp);

console.log('ran');


server.listen(port);