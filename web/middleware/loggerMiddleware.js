const logger = require("../../logger");

// Middleware для логування кожного запиту
module.exports = function (req, res, next) {
    // Логую метод і шлях запиту, щоб бачити активність користувачів
    logger.info("Отримано запит", { method: req.method, url: req.url });

    // Передаю керування наступному middleware
    next();
};
