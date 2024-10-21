const http = require('node:http'); // para el protocolo http
const { freePort } = require('./free-port.js');

const server = http.createServer((req, res) => {
    console.log("request received");
    res.end('Hola mundo este en un server de node');
});

 freePort(3000).then((port) => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`);
    });
});