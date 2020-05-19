const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes");

const app = express();
app.use(logger("dev"));
app.get("/", (req, res) => res.send("hello"));

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

module.exports = app;
