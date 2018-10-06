const getPort = require("get-port");

const server = require("./src/server");

// Env-overrideable configuration values.
const DEFAULT_PORT = 3000;
const port = process.env.BLOTIFY_PORT || DEFAULT_PORT;

// Start the server.
server.listen(port);
