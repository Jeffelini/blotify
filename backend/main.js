const pino = require("pino");
const logger = pino();

// Read the .env file in the current working directory.
const dotenv = require("dotenv");

// Configure the program environment from the .env in the current working
// directory.
const result = dotenv.config();
if (result.error) logger.error(`Failed to load dotenv: ${result.error}`);

// Env-overrideable configuration values.
const DEFAULT_PORT = 3000;
const port = process.env.BLOTIFY_PORT || DEFAULT_PORT;

try {
  const newServer = require("./src/server");
  const server = newServer(logger);

  // Start the server.
  server.listen(port);
} catch (err) {
  logger.error(`Failed to instantiate server: ${err}`);
}
