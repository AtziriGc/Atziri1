var express = require('express');
var app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/',function(req,res){
    res.sendFile(__dirname+'/respuesta.html');
 });

app.post('/respuesta', function (req, res) {
    console.log("Información enviada");
    res.send("Nombre ingresado: "+req.body.nombre);
 });

app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
  });
