const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    data: {
      type: Buffer,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
