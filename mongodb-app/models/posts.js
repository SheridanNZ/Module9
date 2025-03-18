const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid"); // Import UUID for unique ID generation

const postSchema = new Schema({
  postID: { type: String, unique: true, default: uuidv4 }, // Auto-generate unique postID
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  postTitle: { type: String, trim: true, required: true },
  postDesc: { type: String, trim: true, required: true },
  postImage: { type: String },
  postCreationTime: { type: Date, default: Date.now },
  likeCount: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

module.exports = mongoose.model("post", postSchema);
