const logger = require("../../logger");

// Глобальний обробник помилок
module.exports = function (err, req, res, next) {
    // Логую помилку, щоб потім можна було знайти причину
    logger.error("Сталася помилка", { message: err.message });

    // Відповідаю клієнту стандартним повідомленням
    res.status(500).json({ error: "Внутрішня помилка сервера" });
};
