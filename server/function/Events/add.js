const table = require("../../table/Events");

const addEvents = async (req, res) => {
  try {
    const _new = new table(req.body);
    await _new.save();
    return res.status(201).json(_new);
  } catch (error) {
    console.error(error);
    return res.status(500).send("ბლოგის დამატება ვერ მოხერხდა");
  }
};

module.exports = { addEvents };
