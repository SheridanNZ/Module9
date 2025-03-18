const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

router.get("/:uid", (req, res) => {
    Controllers.postController.getUserPosts(req, res);
  });

// matches POST requests sent to /api/post/create
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// matches PUT requests to /api/post
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res); 
});

// matches PUT requests to /api/post
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;