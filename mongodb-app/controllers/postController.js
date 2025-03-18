"use strict";
const { Post } = require("../models");

// Create a new post
const createPost = (data, res) => {
  new Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get all posts
const getPosts = (res) => {
  Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update a post by ID
const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a post by ID
const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get all posts for a given user
const getUserPosts = (req, res) => {
  Post.find({ userId: req.params.uid }) // Find posts by userId
    .populate("userId") // Populate the userId field with user details
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Like a post
const likePost = (req, res) => {
  const postId = req.params.id;
  const userId = req.body.userId;

  Post.findByIdAndUpdate(
    postId,
    { $inc: { likeCount: 1 }, $push: { likes: userId } },
    { new: true }
  )
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Add a comment to a post
const addComment = (req, res) => {
  const postId = req.params.id;
  const { userId, comment } = req.body;

  Post.findByIdAndUpdate(
    postId,
    { $push: { comments: { userId, comment } } },
    { new: true }
  )
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getUserPosts,
  likePost,
  addComment,
};