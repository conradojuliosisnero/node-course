// asincrono
// asyn await pero en cjs
const { readFile } = require("node:fs/promises");

// esto es una IIFE - immediately invoked function expression
// esto es lo mismo que crear una funcion anonima y llamarla solo que se hace una vez de manera implicita
// y mas sencilla

(async () => {
  console.log("leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log(text);
  console.log("--> hacer otras cosas mientras se ejecuta el archivo...");
  console.log("leyendo el segundo archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log(secondText);
})();

