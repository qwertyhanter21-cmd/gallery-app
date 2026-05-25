const GalleryService = require("../services/GalleryService");

class GalleryController {
    constructor() {
        this.service = new GalleryService();
    }

    addImage(filename, title) {
        return this.service.addImage(filename, title);
    }

    listImages() {
        return this.service.getAllImages();
    }
}

module.exports = GalleryController;
