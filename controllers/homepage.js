// Import express router
const router = require('express').Router();
// Import auth helper
const withAuth = require('../utils/auth.js');
// Import models
const { User, Post } = require('../models');

// Get all posts for logged in users on homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['title', 'content'],
                },
            ],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});