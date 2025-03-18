"use strict";
const { Comment } = require("../models");

// Create a new comment
const createComment = (req, res) => {
  const { userId, postId, commentText } = req.body;
  new Comment({ userId, postId, commentText })
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Get all comments for a post
const getCommentsByPost = (req, res) => {
  Comment.find({ postId: req.params.postId })
    .populate("userId", "firstName lastName")
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Update a comment
const updateComment = (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Delete a comment
const deleteComment = (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, message: "Comment deleted" }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

module.exports = {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
};
