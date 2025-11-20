const courseRouter = require("express").Router();

const { addCourse } = require("../function/course/add.js");
const { getCourse } = require("../function/course/list.js");
const { getCourseById } = require("../function/course/id.js");
const { deleteCourse } = require("../function/course/delete.js");
const { editCourse } = require("../function/course/edit.js");

courseRouter.get("/", getCourse);               // ყველა ბლოგი
courseRouter.get("/:id", getCourseById);         // კონკრეტული ბლოგი
courseRouter.post("/", addCourse);               // დამატება
courseRouter.put("/:id", editCourse);            // რედაქტირება
courseRouter.delete("/:id", deleteCourse);       // წაშლა

module.exports = courseRouter;
