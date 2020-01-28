const config = require("config");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

// Routes
app.use("/docs", require("./routes/docs"));
app.use("/api/reviews", require("./routes/reviews"));

// Debugging
const startupDebug = require("debug")("snackchat:startup");

// Startup
startupDebug(`Starting ${config.get("name")}...`);

// MongoDB
function parseDatabaseURL() {
  return config
    .get("db")
    .replace("<username>", config.get("dbUsername"))
    .replace("<password>", config.get("dbPassword"));
}

async function connectToDatabase() {
  const db = config.get("db");
  const username = config.get("dbUsername");

  try {
    await mongoose.connect(parseDatabaseURL(), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    startupDebug(`Connected to ${db} w/ username=${username}...`);
  } catch (err) {
    startupDebug(`Failed to connect to ${db} w/ username=${username}...`);
  }
}

connectToDatabase();

// Morgan
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebug("Morgan enabled...");
}

// Port Listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
  startupDebug(`Listening on port ${port}...`);
});
