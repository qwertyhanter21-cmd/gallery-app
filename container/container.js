// DI-контейнер Awilix
// Реєструє всі залежності застосунку

const { createContainer, asClass } = require("awilix");
const JsonDatabase = require("../data/JsonDatabase");
const GalleryRepository = require("../repositories/GalleryRepository");
const GalleryService = require("../services/GalleryService");

// Створюємо контейнер
const container = createContainer();

// Реєструємо залежності
container.register({
    galleryDb: asClass(JsonDatabase).singleton(),          // JSON-база
    galleryRepository: asClass(GalleryRepository).singleton(), // Репозиторій
    galleryService: asClass(GalleryService).singleton()    // Сервіс
});

module.exports = container;
