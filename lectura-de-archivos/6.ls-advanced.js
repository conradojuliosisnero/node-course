const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(pc.red(`No se puede leer el directorio: ${folder}`));
    process.exit(1);
  }
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath); // status - informacion del archivo
    } catch (error) {
      console.error(`No se puede leer el archivo: ${filePath}`);
      process.exit(1);
    }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.toString().padStart(10)
    )} ${pc.yellow(fileModified)}`;
  });
  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((file) => console.log(file));
}

ls(folder);
