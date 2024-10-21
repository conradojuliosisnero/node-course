const net = require("node:net");

function freePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    // Listen on the desired port
    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });
    // If the port is in use, try the next one
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        resolve(freePort(desiredPort + 1)).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { freePort };
