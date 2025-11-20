const table = require("../../table/gallery");

const addGallery = async (req, res) => {
  try {
    const newBlog = new table(req.body);
    await newBlog.save();
    return res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).send("ბლოგის დამატება ვერ მოხერხდა");
  }
};

module.exports = { addGallery };
