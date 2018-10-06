const newLogger = require("pino");
const API = require("./api");

const logger = newLogger({ name: "server" });

const server = {
  listen: function(port) {
    console.log(`Should listen on port: ${port}`);

    const authURL = API.createAuthorizeURL();
    console.log(`authURL: ${authURL}`);
  }
};

module.exports = server;
