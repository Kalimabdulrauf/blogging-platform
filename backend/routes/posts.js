const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a specific post
router.get('/:id', getPost, (req, res) => {
    res.json(res.post);
});

// Delete a post
router.delete('/:id', getPost, async (req, res) => {
    try {
        await res.post.remove();
        res.json({ message: 'Deleted Post' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getPost(req, res, next) {
    let post;
    try {
        post = await Post.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.post = post;
    next();
}

module.exports = router;
