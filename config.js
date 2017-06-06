const EnvUtil = require("./server/utils/env-utils");
const DEFAULT_PORT = 8080;

module.exports = {
    server: {
        host: EnvUtil.readEnvValue("MDC_HOST"),
        port: EnvUtil.readIntegerEnvValue("MDC_PORT", DEFAULT_PORT),
        debug: EnvUtil.readBoolEnvValue("MDC_DEBUG")
    },
    api: {
        serviceUrl: EnvUtil.readEnvValue("MDC_WS_BASE_URL")
    }
};