const MessageRouter = require("express").Router();

const { addMessage } = require("../function/Message/add.js");
const { getMessage } = require("../function/Message/list.js");
const { getMessageById } = require("../function/Message/id.js");
const { deleteMessage } = require("../function/Message/delete.js");
const { editMessage } = require("../function/Message/edit.js");

MessageRouter.get("/", getMessage);               // ყველა ბლოგი
MessageRouter.get("/:id", getMessageById);         // კონკრეტული ბლოგი
MessageRouter.post("/", addMessage);               // დამატება
MessageRouter.put("/:id", editMessage);            // რედაქტირება
MessageRouter.delete("/:id", deleteMessage);       // წაშლა

module.exports = MessageRouter;
