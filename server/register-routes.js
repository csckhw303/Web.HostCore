const staticRoutes = require("../routes/static-files");

const registerRoutes = function(server, dir) {
    staticRoutes(server, dir);
};

module.exports = registerRoutes;