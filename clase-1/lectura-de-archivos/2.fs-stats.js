// fs --> file system
// node:fs --> libreria de node
const fs = require("node:fs"); // apartir de node 16, se recomiendo poner node:

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), // si es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace
  stats.size //tamaño del archivo
);
