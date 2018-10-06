const newLogger = require("pino");
const API = require("./api");

/**
 * newServer creates a new server with the provided components.
 * @param {P.Logger} parentLogger
 */
module.exports = function(parentLogger) {
  const logger = parentLogger.child({ name: "server" });

  return {
    listen: function(port) {
      console.log(`Should listen on port: ${port}`);

      const authURL = API.createAuthorizeURL();
      console.log(`authURL: ${authURL}`);
    }
  };
};
