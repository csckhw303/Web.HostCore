
const Config = require("../config");

const configConnection = function (server) {
    const serverConfig = Config.server;
    server.connection({host: serverConfig.host, port: serverConfig.port});
};

const configEnvironment = function(server, dir, hostDir) {
    configConnection(server);
}

module.export = configEnvironment;