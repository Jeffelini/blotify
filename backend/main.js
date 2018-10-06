// Read the .env file in the current working directory.
const dotenv = require("dotenv");

// Configure the program environment from the .env in the current working
// directory.
const result = dotenv.config();
if (result.error) console.error(`Failed to load dotenv: ${result.error}`);

const server = require("./src/server");

// Env-overrideable configuration values.
const DEFAULT_PORT = 3000;
const port = process.env.BLOTIFY_PORT || DEFAULT_PORT;

// Start the server.
server.listen(port);
