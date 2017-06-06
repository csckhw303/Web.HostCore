"use strict";
/*eslint-disable */
const Hapi = require("hapi");
const Path = require("path");
const configEnvironment = require("./server/config-environments");


const startSever = function (hostDir, log, cb) {
    const server = new Hapi.Server();
    configEnvironment(server, Path.join(__dirname, "../"), hostDir);
    server.route({
        method: "GET",
        path: "/hello",
        handler: function(request, reply){
            reply("Here we go");
        }
    });
    server.start();

};

module.exports = {startSever};