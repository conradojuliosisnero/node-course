const os = require('node:os');

// informacion del sistema operativo
console.log("informacion del sistema operativo", os.platform())
console.log("version del sistema operativo", os.release())
console.log("memoria total", os.totalmem() / 1024 / 1024)
console.log("memoria libre", os.freemem() / 1024 / 1024)
console.log("numero de procesadores", os.cpus() )
console.log(os.uptime() / 60 / 60 ) 