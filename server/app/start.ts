import * as express from "express";
import * as bodyParser from "body-parser";
const chalk = require("chalk");
const routes = require("./routes/modelRoute");

process.on("unhandledRejection", err => {
  throw err;
});

console.log(chalk.cyan("Starting SERVER...."));
const app = express();
app.set("trust proxy", true);
console.log(chalk.cyan("RUNNING ON NODE VERSION: " + process.version));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//////////////////////////////
// Configure CORS
//////////////////////////////
app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, apiKey");
  next();
});

app.use("/api", routes);

// catch 404 and forward to error handlers
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.message = "404";
  next(err);
});

const port = process.env.PORT || 5000;
app.set("port", port);
console.log("Listening on port: " + port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port);

/**
 * Event listener for HTTP server "error" event.
 */
app.use((error: any, req, res, next) => {
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      console.log(error);
      throw error;
  }
});

module.exports = app;
