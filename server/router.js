const express = require("express");
const mainRouter = express.Router();

const blogRouter = require("./allRouter/BlogRouter.js");
const galleryRouter = require("./allRouter/GalleryRouter.js");
const uploadRouter = require("./allRouter/uploadPhotoRouter.js");
const teamRouter = require("./allRouter/TeamRouter.js");
const userRouter = require("./allRouter/UserRouter.js");
const sendMailRouter = require("./allRouter/SendMailRouter.js");
const courseRouter = require("./allRouter/CourseRouter.js");
const CampsRouter = require("./allRouter/CampsRouter.js");
const EventsRouter = require("./allRouter/EventsRouter.js");
const MessageRouter = require("./allRouter/MessageRouter.js");

mainRouter.get('/', (req, res) => {
    res.json({ message: 'გამარჯობა Frontend-იდან!' });
});

// როუტერის გამოყენება
mainRouter.use("/mail", sendMailRouter);
mainRouter.use("/upload", uploadRouter);
mainRouter.use("/blogs", blogRouter);
mainRouter.use("/gallery", galleryRouter);
mainRouter.use("/teams", teamRouter);
mainRouter.use("/course", courseRouter);
mainRouter.use("/camps", CampsRouter);
mainRouter.use("/events", EventsRouter);
mainRouter.use("/message", MessageRouter);
mainRouter.use("/users", userRouter);


module.exports = mainRouter;