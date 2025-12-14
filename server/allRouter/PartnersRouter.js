const partnersRouter = require("express").Router();

const { addPartners } = require("../function/partners/add.js");
const { getPartners } = require("../function/partners/list.js");
const { getPartnersById } = require("../function/partners/id.js");
const { deletePartners } = require("../function/partners/delete.js");
const { editPartners } = require("../function/partners/edit.js");

partnersRouter.get("/", getPartners);               // ყველა ბლოგი
partnersRouter.get("/:id", getPartnersById);         // კონკრეტული ბლოგი
partnersRouter.post("/", addPartners);               // დამატება
partnersRouter.put("/:id", editPartners);            // რედაქტირება
partnersRouter.delete("/:id", deletePartners);       // წაშლა

module.exports = partnersRouter;
