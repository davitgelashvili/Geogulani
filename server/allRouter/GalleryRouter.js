const galleryRouter = require("express").Router();

const { addGallery } = require("../function/gallery/add.js");
const { getGallery } = require("../function/gallery/list.js");
const { getGalleryById } = require("../function/gallery/id.js");
const { deleteGallery } = require("../function/gallery/delete.js");
const { editGallery } = require("../function/gallery/edit.js");

galleryRouter.get("/", getGallery);               // ყველა ბლოგი
galleryRouter.get("/:id", getGalleryById);         // კონკრეტული ბლოგი
galleryRouter.post("/", addGallery);               // დამატება
galleryRouter.put("/:id", editGallery);            // რედაქტირება
galleryRouter.delete("/:id", deleteGallery);       // წაშლა

module.exports = galleryRouter;
