// asincrono
// asyn await solo funciona en ES modules
import { readFile } from 'node:fs/promises'

console.log("leyendo el primer archivo...");
const text = await readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("hacer otras cosas mientras se ejecuta el archivo...");

console.log("leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log(secondText);
