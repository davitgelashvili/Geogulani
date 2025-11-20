const EventsRouter = require("express").Router();

const { addEvents } = require("../function/Events/add.js");
const { getEvents } = require("../function/Events/list.js");
const { getEventsById } = require("../function/Events/id.js");
const { deleteEvents } = require("../function/Events/delete.js");
const { editEvents } = require("../function/Events/edit.js");

EventsRouter.get("/", getEvents);               // ყველა ბლოგი
EventsRouter.get("/:id", getEventsById);         // კონკრეტული ბლოგი
EventsRouter.post("/", addEvents);               // დამატება
EventsRouter.put("/:id", editEvents);            // რედაქტირება
EventsRouter.delete("/:id", deleteEvents);       // წაშლა

module.exports = EventsRouter;
