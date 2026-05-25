// Middleware для перевірки обов'язкового заголовка
module.exports = function (req, res, next) {
    // Перевіряю, чи передано заголовок X-App
    // Це проста перевірка, щоб показати роботу middleware
    if (!req.headers["x-app"]) {
        return res.status(400).json({ error: "Відсутній заголовок X-App" });
    }

    // Якщо заголовок є — продовжуємо
    next();
};
