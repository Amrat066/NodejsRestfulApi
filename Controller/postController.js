// controllers/postController.js
const postService = require('../Service/postService.js');


const createPost = async (req, res) => {
    const { title, content, userId, categoryId } = req.body;
  
    if (!title || !content || !userId || !categoryId) {
      return res.status(400).json({ message: 'Title, content, User ID, and Category ID are required' });
    }
  
    try {
      const newPost = await postService.createPost(title, content, userId, categoryId);
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
const getPostsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await postService.getPostsByUserId(userId);
    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found for this user' });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await postService.getPostById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const updateData = req.body;

  try {
    const updatedPost = await postService.updatePost(postId, updateData);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const deletedPost = await postService.deletePost(postId);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  getPostsByUserId,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost,
};
