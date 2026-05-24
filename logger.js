// logger.js

function log(level, message, details = {}) {
    const entry = {
        timestamp: new Date().toISOString(),
        level,
        message,
        details
    };

    console.log(JSON.stringify(entry));
}

module.exports = {
    info: (msg, d) => log("INFO", msg, d),
    warn: (msg, d) => log("WARN", msg, d),
    error: (msg, d) => log("ERROR", msg, d),
    fatal: (msg, d) => log("FATAL", msg, d)
};
