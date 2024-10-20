const fs = require("node:fs");

// para leer todos los archivos o ficheros en la carpeta
fs.readdir(".", (err, files) => {
  if (err) {
    console.log('error reading file',err);
    return;
  }
    files.forEach((file) => {
       console.log(file)
   }) 
});
