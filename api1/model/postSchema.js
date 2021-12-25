const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type:Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Posts", postSchema);
