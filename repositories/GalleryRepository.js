// Репозиторій — працює з JSON-базою через JsonDatabase
// Отримує galleryDb через DI-контейнер

class GalleryRepository {
    constructor({ galleryDb }) {
        // JSON-база
        this.db = galleryDb;
    }

    // Додати новий запис
    add(filename, title) {
        const image = {
            id: Date.now(), // простий унікальний ID
            filename,
            title
        };

        this.db.insert(image);
        return image;
    }

    // Отримати всі записи
    getAll() {
        return this.db.getAll();
    }
}

module.exports = GalleryRepository;
