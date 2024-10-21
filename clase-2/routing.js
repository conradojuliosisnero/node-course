const http = require("node:http");

const dittoJson = require("./pokemon/ditto.json");

const processRequest = (req, res) => {
  const { url, method } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "aplication/json");
          return res.end(JSON.stringify(dittoJson));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain");
          res.end("Not Found");
          break;
      }
    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";
      }

    default:
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Method Not Allowed");
      break;
  }
};

// aca es donde creamos el servidor
const server = http.createServer(processRequest);

// esto es la ruta del servidor
server.listen(1234, () => {
  console.log("server listening on port http://localhost:1234");
});
