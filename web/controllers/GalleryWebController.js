const express = require("express");
const GalleryController = require("../../controllers/GalleryController");

const router = express.Router();
const gallery = new GalleryController();

// Ендпоінт для додавання зображення
router.post("/add", (req, res) => {
    // Додаю зображення через бізнес-логіку
    const img = gallery.addImage(req.body.filename, req.body.title);

    // Повертаю результат клієнту
    res.json(img);
});

// Ендпоінт для отримання всіх зображень
router.get("/list", (req, res) => {
    // Повертаю список усіх зображень
    res.json(gallery.listImages());
});

module.exports = router;
