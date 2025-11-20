const CampsRouter = require("express").Router();

const { addCamps } = require("../function/Camps/add.js");
const { getCamps } = require("../function/Camps/list.js");
const { getCampsById } = require("../function/Camps/id.js");
const { deleteCamps } = require("../function/Camps/delete.js");
const { editCamps } = require("../function/Camps/edit.js");

CampsRouter.get("/", getCamps);               // ყველა ბლოგი
CampsRouter.get("/:id", getCampsById);         // კონკრეტული ბლოგი
CampsRouter.post("/", addCamps);               // დამატება
CampsRouter.put("/:id", editCamps);            // რედაქტირება
CampsRouter.delete("/:id", deleteCamps);       // წაშლა

module.exports = CampsRouter;
