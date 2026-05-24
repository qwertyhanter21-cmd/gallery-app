const logger = require("./logger");

logger.info("Application started");
logger.warn("Low memory warning");
logger.error("Failed to load image", { file: "photo.jpg" });
logger.fatal("Unexpected crash", { code: 500 });
