const { Post, User } = require('../models');

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts', error: err.message });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, { include: User });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching post', error: err.message });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { post_title, post_desc, image_url, user_id } = req.body;
    const post = await Post.create({ post_title, post_desc, image_url, user_id });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post', error: err.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const { post_title, post_desc, image_url } = req.body;
    const [updated] = await Post.update(
      { post_title, post_desc, image_url },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedPost = await Post.findByPk(req.params.id);
      return res.status(200).json(updatedPost);
    }
    res.status(404).json({ message: 'Post not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating post', error: err.message });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(204).json({ message: 'Post deleted' });
    }
    res.status(404).json({ message: 'Post not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post', error: err.message });
  }
};