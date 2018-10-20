const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send('Hola desde express');
});

app.get('/mi_ruta', (req, res, next) => {
    // destructuracion { nombre }
    const { nombre, edad } = req.query;
    res.send(`Hola ${nombre}, edad ${edad}`);
    console.log(req.query);
});

app.get('/mi_parametro/:nombre/:edad', (req, res, next) => {
    res.send(`Tu nombre es ${req.params.nombre} y tu edad es ${req.params.edad}`);
});

app.listen(port, ()=>{
    console.log(`Corriendo en ${port}`);
});