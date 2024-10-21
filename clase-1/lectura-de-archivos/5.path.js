const path = require('node:path');

// unir rutas con path.join
// './ruta/subcarpeta/archivo.txt' ✖️ no funciona en todos los sistemas operativos
 
// para comprobar el tipo de ruta
console.log(path.sep); // path.sep --> separador de rutas

// para unir rutas
const filePath = path.join('./ruta','subcarpeta', 'archivo.txt');
// console.log(filePath);
const basename = path.basename('./ruta/subcarpeta/archivo.txt', '.txt');
// console.log(basename);
const extension = path.extname('./ruta/subcarpeta/archivo.txt');
// console.log(extension);
