const express = require("express");
const container = require("../../container/container");

const router = express.Router();
const galleryService = container.resolve("galleryService");

// Додавання зображення
router.post("/add", (req, res) => {
    const img = galleryService.addImage(req.body.filename, req.body.title);
    res.json(img);
});

// Отримання списку
router.get("/list", (req, res) => {
    res.json(galleryService.listImages());
});

module.exports = router;
