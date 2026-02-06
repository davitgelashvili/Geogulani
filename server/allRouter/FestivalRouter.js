const FestivalRouter = require("express").Router();

const { addFestival } = require("../function/Festival/add.js");
const { getFestival } = require("../function/Festival/list.js");
const { getFestivalById } = require("../function/Festival/id.js");
const { deleteFestival } = require("../function/Festival/delete.js");
const { editFestival } = require("../function/Festival/edit.js");

FestivalRouter.get("/", getFestival);               // ყველა ბლოგი
FestivalRouter.get("/:id", getFestivalById);         // კონკრეტული ბლოგი
FestivalRouter.post("/", addFestival);               // დამატება
FestivalRouter.put("/:id", editFestival);            // რედაქტირება
FestivalRouter.delete("/:id", deleteFestival);       // წაშლა

module.exports = FestivalRouter;
