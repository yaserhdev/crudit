// Import express router
const router = require('express').Router();
// Import post model
const { Post } = require('../../models');
// Create new post
router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        title: req.body.title,
        content: req.body.content,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(postData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;