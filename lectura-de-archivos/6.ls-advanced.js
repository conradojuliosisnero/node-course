const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

async function ls(folder) {

}

ls(folder)

// para leer todos los archivos o ficheros en la carpeta
fs.readdir(folder).then((files) => {
    files.forEach((file) => {
      const filePath = path.join(folder, file);
        console.log(filePath);
        fs.stat(filePath).then((stats) => {
            console.log(stats);
        })
    });
}).catch((err) => {
      if (err) {
        console.log("error reading file", err);
        return;
      }
})
