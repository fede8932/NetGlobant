const express = require("express");
const cors = require("cors");

const { resolve } = require("path");
require("dotenv").config({ path: resolve(__dirname, "../.env") });
const db = require("./db");
const routes = require("./routes")

const { SERVER_PORT } = process.env;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use("/", routes);

db.sync({ force: false }).then(() => {
  app.listen(SERVER_PORT, (req, res) => {
    console.log("Server Listening on port: " + SERVER_PORT);
  });
});
