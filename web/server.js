// Основні залежності
const express = require("express");
const path = require("path");

// Підключаю middleware
const loggerMiddleware = require("./middleware/loggerMiddleware");
const headersMiddleware = require("./middleware/headersMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

// Підключаю маршрути
const galleryRoutes = require("./controllers/GalleryWebController");

// Створюю застосунок
const app = express();

// Дозволяю читати JSON у запитах
app.use(express.json());

// Логування запитів
app.use(loggerMiddleware);

// Перевірка заголовків
app.use(headersMiddleware);

// Підключення маршрутів галереї
app.use("/gallery", galleryRoutes);

// Обробка помилок
app.use(errorMiddleware);

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});
