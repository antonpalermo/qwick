import debug from "debug";
import http from "node:http";

import { createServer } from "./createServer.mjs";

import "./database.mjs";

const logger = debug("app:server");

function normalizePort(port) {
  const parsedPort = parseInt(port);

  if (isNaN(parsedPort)) {
    return port;
  }

  if (parsedPort >= 0) {
    return parsedPort;
  }

  return false;
}

function onListen() {
  const address = server.address();

  const bind =
    typeof address === "string" ? "pipe " + address : "port " + address.port;

  logger("Server started and listening on " + bind);
}

function onError(error) {
  // Skip if not a listening error
  if (error.syscall !== "listen") {
    throw error;
  }

  // Format port/pipe for message
  const bind =
    typeof port === "string"
      ? "Pipe " + port // For named pipes
      : "Port " + port; // For port numbers

  // Handle specific errors
  switch (error.code) {
    case "EACCES": // Permission denied
      console.error(bind + " requires elevated privileges");
      process.exit(1); // Exit with failure
    case "EADDRINUSE": // Port in use
      console.error(bind + " is already in use");
      process.exit(1); // Exit with failure
    default:
      throw error; // Unknown error
  }
}

const app = createServer();
const port = normalizePort(process.env.PORT || "8080");

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListen);
