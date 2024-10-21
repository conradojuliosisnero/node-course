const http = require("node:http"); // para el protocolo http
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; // OK
    res.setHeader("Content-Type", "text/plain");
    res.end(
      JSON.stringify({ message: "Hola mundo este en un server de node" })
    );
  } else if (req.url === "/descarga.jpeg") {
    res.statusCode = 200; // OK
    fs.readFile("./descarga.jpeg", (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
