// services/postService.js
const Post = require('../model/Post.js');
const User = require('../model/User.js');
const Category = require('../model/Category.js');


const createPost = async (title, content, userId, categoryId) => {
    try {
        const user = await User.findById(userId);
        const category = await Category.findById(categoryId);
  
      if (!user) {
        throw new Error('User not found');
      }
  
      if (!category) {
        throw new Error('Category not found');
      }
  
      const newPost = new Post({
        title,
        content,
        user: userId,
        category: categoryId,
      });
  
      const data= await newPost.save();
      return data;
    } catch (err) {
      throw new Error(`Error creating post: ${err.message}`);
    }
  };

  const getPostsByUserId = async (userId) => {
    try {
      const posts = await Post.find({ user:userId});
      return posts;
    } catch (err) {
      throw new Error(`Error retrieving posts: ${err.message}`);
    }
  };

const getPostById = async (postId) => {
  try {
    return await Post.findById(postId);
  } catch (err) {
    throw new Error(`Error retrieving post: ${err.message}`);
  }
};

const getAllPosts = async () => {
  try {
    return await Post.find();
  } catch (err) {
    throw new Error(`Error retrieving posts: ${err.message}`);
  }
};

const updatePost = async (postId, updateData) => {
  const data = await Post.findByIdAndUpdate(postId,updateData,{new:true});
  return data;
};

const deletePost = async (postId) => {
    
  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  } catch (err) {
    throw new Error(`Error deleting post: ${err.message}`);
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
