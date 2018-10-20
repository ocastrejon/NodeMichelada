var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  res.send('Esta es la ruta principal de archivos');
});

router.get('/leer', function(req, res, next) {
    fs.readFile('datos.json', 'utf-8', (err, datos) => {
        res.render('archivos/leer', JSON.parse(datos));
    });
  });

module.exports = router;
