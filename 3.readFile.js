// sincrono
// const fs = require("node:fs");

// console.log("leyendo el primer archivo...");
// const text = fs.readFileSync('./archivo.txt', 'utf-8');
// console.log(text.toString());

// console.log("leyendo el segundo archivo...");
// const secondText = fs.readFileSync("./archivo2.txt", "utf-8");

// console.log(secondText.toString())

// asincrono
const fs = require("node:fs");
// const { promisify } = require("node:util"); // para promesas
// const readFilePromise = promisify(fs.readFile); // para promesas en caso de que no sea asincrono

console.log("leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  // <-- ejecuta de manera asincrona este callback
  console.log(text);
}); // para que se ejecute de manera asincrona recibe un callback

console.log("hacer otras cosas mientras se ejecuta el archivo...");

console.log("leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  // <-- ejecuta de manera asincrona este callback
  console.log(text);
});
