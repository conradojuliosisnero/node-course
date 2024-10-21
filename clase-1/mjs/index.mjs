// .js --> por defecto usa CJs
// .mjs --> por defecto usa ES module
// .cjs --> por defecto usa CJS

import { sum, sub, mul } from "./sum.mjs";

console.log(sum(1, 2));
console.log(sub(4, 0));
console.log(mul(8, 0));