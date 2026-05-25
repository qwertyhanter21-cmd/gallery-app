const { createContainer, asClass } = require("awilix");
const GalleryService = require("../services/GalleryService");

const container = createContainer();

// Реєструю сервіси
container.register({
    galleryService: asClass(GalleryService).singleton()
});

module.exports = container;
