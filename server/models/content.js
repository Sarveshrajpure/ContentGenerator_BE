const mongoose = require("mongoose");

const contentSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    contentLink: { type: String, required: true },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = { Content };
