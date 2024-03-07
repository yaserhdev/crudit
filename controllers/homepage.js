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
                {
                  model: User, 
                  attributes: ['name'],
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

// Get a single post
router.get('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Post,
            attributes: ['title', 'content'],
          },
          {
            model: User, 
            attributes: ['name'],
          },
        ],
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
  
      const post = postData.get({ plain: true });
      res.render('homepage', {
        post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Get sign-up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// Get login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;