const GalleryController = require("./controllers/GalleryController");

const gallery = new GalleryController();

gallery.addImage("photo1.jpg", "My first photo");
gallery.addImage("photo2.jpg", "Another picture");

console.log(gallery.listImages());
