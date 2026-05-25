const Image = require("../models/Image");
const logger = require("../logger");

class GalleryService {
    constructor() {
        this.images = [];
    }

    addImage(filename, title) {
        const id = this.images.length + 1;
        const image = new Image(id, filename, title);

        this.images.push(image);
        logger.info("Image added", { id, filename });

        return image;
    }

    getAllImages() {
        logger.info("Images requested", { count: this.images.length });
        return this.images;
    }
}

module.exports = GalleryService;
