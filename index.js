// Variables de entorno. correr -> NOMBRE=oscar index.js
// es un string totalmente
// console.log(`Hola ${process.env.NOMBRE}`);

// Variables de entorno. correr -> PORT=3000 index.js
// console.log('Hola ' + process.env.PORT);

const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello mundo');
}).listen(port, hostname, () => {
    console.log(`Corriendo en el puerto ${port}`);
});