const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Create a new post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// Get all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// Update a post by ID
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// Delete a post by ID
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

// Get all posts from given user
router.get("/:uid", (req, res) => {
  Controllers.postController.getUserPosts(req, res);
});

// Like a post
router.post("/:id/like", (req, res) => {
  Controllers.postController.likePost(req, res);
});

// Add a comment to a post
router.post("/:id/comment", (req, res) => {
  Controllers.postController.addComment(req, res);
});

module.exports = router;