const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    title: { type: Object, required: false },
    cover: { type: String, required: false },
    desc: { type: Object, required: false },
    createDate: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Events", EventsSchema);
