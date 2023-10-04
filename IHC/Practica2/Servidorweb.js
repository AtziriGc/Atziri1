var express = require('express');
var app = express()
app.get('/', function (req, res) {
    res.send('Hola Mundo');
 });
 
 app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });

