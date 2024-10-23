const express = require("express");

const dittoJSON = require("./pokemon/ditto.json");

const PORT = process.env.PORT ?? 1234; //  PORT
const app = express(); // express app
app.disable("x-powered-by"); // no mostrar el identificador de la libreria

app.use((req, res, next) => {
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();
  // solo llegan request post con content type json
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
      data.timestamp = Date.now();
      // mutar la request y cambiar el body
    req.body = data;
    next();
  });
});

// METHOD GET
app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json(dittoJSON);
});

// METHOD POST
app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body); 
});

// la ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
