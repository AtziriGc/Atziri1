const express = require('express');
const app = express();
const port = 8000; // Puedes cambiar el puerto si lo deseas

// Configura middleware para analizar datos JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta para mostrar el formulario HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/respuesta.html'); // Asegúrate de tener un archivo "formulario.html" en el mismo directorio
});

// Ruta para manejar la solicitud POST
app.post('/respuesta', (req, res) => {
  const nombre = req.body.nombre;
  res.send(`Nombre ingresado:   ${nombre}`);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});


