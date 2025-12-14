const mongoose = require("mongoose");

const partnersSchema = new mongoose.Schema(
  {
    title: { type: Object, required: false },
    cover: { type: String, required: false },
    desc: { type: Object, required: false },
    createDate: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Partners", partnersSchema);
