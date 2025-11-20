const mongoose = require("mongoose");

const MultilangText = {
    ka: { type: String, required: false },
    ru: { type: String, required: false },
    en: { type: String, required: false }
};

const teamSchema = new mongoose.Schema({
    title: {
        type: MultilangText,
        required: false,
    },
    position: {
        type: MultilangText,
        required: false,
    },
    cover: { type: String, required: false },
    desc: {
        type: MultilangText,
        required: false,
    },
    category: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);
