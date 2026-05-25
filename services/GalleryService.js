class GalleryService {
    constructor() {
        this.images = [];
        this.id = 1;
    }

    addImage(filename, title) {
        const img = { id: this.id++, filename, title };
        this.images.push(img);
        return img;
    }

    listImages() {
        return this.images;
    }
}

module.exports = GalleryService;
