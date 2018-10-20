var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/formulario', function(req, res, next) {
  res.render('formulario', { title: 'Express' });
});

router.post('/nuevo', (req, res, next) => {
  const { nombre, edad } = req.body;

  fs.writeFile('datos.json', JSON.stringify(req.body), (err) => {
    if(!err){
      res.send("Se ha guardado satisfactoriamente");
    } else {
      res.send('Error');
    }
  });
}); 


module.exports = router;
