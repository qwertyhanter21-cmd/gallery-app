// Сервіс галереї — бізнес-логіка
// Отримує репозиторій через DI-контейнер

class GalleryService {
    constructor({ galleryRepository }) {
        // Репозиторій, який працює з JSON-базою
        this.galleryRepository = galleryRepository;
    }

    // Додати зображення
    addImage(filename, title) {
        return this.galleryRepository.add(filename, title);
    }

    // Отримати всі зображення
    listImages() {
        return this.galleryRepository.getAll();
    }
}

module.exports = GalleryService;
