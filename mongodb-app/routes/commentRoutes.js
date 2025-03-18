const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Create a new comment
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req, res);
});

// Get all comments for a post
router.get("/:postId", (req, res) => {
  Controllers.commentController.getCommentsByPost(req, res);
});

// Update a comment
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

// Delete a comment
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
