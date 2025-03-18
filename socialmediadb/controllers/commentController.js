const { Comment, User, Post } = require('../models');

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({ include: [User, Post] });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments', error: err.message });
  }
};

// Get a single comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id, { include: [User, Post] });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comment', error: err.message });
  }
};

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { comment_text, user_id, post_id } = req.body;
    const comment = await Comment.create({ comment_text, user_id, post_id });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Error creating comment', error: err.message });
  }
};

// Update a comment by ID
exports.updateComment = async (req, res) => {
  try {
    const { comment_text } = req.body;
    const [updated] = await Comment.update(
      { comment_text },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedComment = await Comment.findByPk(req.params.id);
      return res.status(200).json(updatedComment);
    }
    res.status(404).json({ message: 'Comment not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating comment', error: err.message });
  }
};

// Delete a comment by ID
exports.deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(204).json({ message: 'Comment deleted' });
    }
    res.status(404).json({ message: 'Comment not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting comment', error: err.message });
  }
};