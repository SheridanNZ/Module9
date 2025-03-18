const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  commentText: { type: String, required: true },
  commentCreationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
