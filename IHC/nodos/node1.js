const { info } =require('console');
const fs = require('fs');

//fs.writeFileSync('archivo.txt', "Hola, este es un archivo nuevo, creado de manera sincrónica");
//se puede escribir de manera asincronica en 'archivo2.txt'
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {
    if (err){
       console.log(err); //Contola el 'error', lo imprime en consola
    }else {
        console.log('archivo2.txt se ha creado correctamente');
    }
});
//Pra leer 'info.txt'de manera sincronica
try{
    let informacion = fs.readFileSync('info.txt', 'utf8');
    console.log(informacion);
}catch (error){
    console.error('Error al leer el archivo info.txt:', error.message);
}
//Para Eliminar el Archivo.txt
try {
    fs.unlinkSync('archivo.txt');
    console.log('archivo.txt se a eliminado correctamente');
}catch (error){
    console.error('Error al eliminar el archivo archivo.txt', error.message);
}

