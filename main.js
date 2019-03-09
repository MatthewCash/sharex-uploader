require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

console.log("Connecting to database");
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", function() {
  console.log("Connected to database");
});

async function start() {
  const host = process.env.HOST || "127.0.0.1";
  const port = process.env.PORT || 3000;

  // Load API Routes
  const routes = require("./api/routes");
  app.use("/api", routes);

  // Listen the server
  app.listen(port, host);
  console.log(`Server listening on http://${host}:${port}`);
}
start();
