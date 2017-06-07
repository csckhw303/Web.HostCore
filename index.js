"use strict";
/*eslint-disable */
const Hapi = require("hapi");
const Path = require("path");
const fs = require("fs");
const configEnvironment = require("./server/config-environments");
const registerRoutes = require("./server/register-routes");


const startSever = function (hostDir, log, cb) {
    const server = new Hapi.Server();
    //connect
    configEnvironment(server, Path.join(__dirname, "../"), hostDir);
    
    //static files routes using directory route
    registerRoutes(server, hostDir)
    
    const routesPath = Path.join(hostDir, "src", "routes");
    const featureRoutes = fs.readdirSync(routesPath);

    server.start();

};

module.exports = {startSever};