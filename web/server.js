const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const headersMiddleware = require("./middleware/headersMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");
const galleryRoutes = require("./controllers/GalleryWebController");

const app = express();

// Вбудований middleware для роботи з JSON
app.use(express.json());

// Мої middleware
app.use(loggerMiddleware);      // Логування кожного запиту
app.use(headersMiddleware);     // Перевірка заголовків

// Основні маршрути
app.use("/gallery", galleryRoutes);

// Глобальний обробник помилок (має бути останнім)
app.use(errorMiddleware);

// Запуск сервера
app.listen(3000, () => {
    console.log("Сервер запущено на порту 3000");
});
