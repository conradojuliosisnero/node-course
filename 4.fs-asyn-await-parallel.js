// asincrono
// asyn await pero en cjs
const { readFile } = require("node:fs/promises");

// esto es una IIFE - immediately invoked function expression
// esto es lo mismo que crear una funcion anonima y llamarla solo que se hace una vez de manera implicita
// y mas sencilla

// aca solo se hace una promesa en paralelo para que se ejecute de manera asincrona
// y no de manera sincrona
Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8")
]).then(([text, secondText]) => {
  console.log(text);
  console.log(secondText);
})


