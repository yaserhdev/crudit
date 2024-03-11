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
// Delete post
router.delete('/:post_id', (req, res) => {
  Post.destroy({
    where: {
      post_id: req.params.post_id,
    },
  })
    .then((deletedPost) => {
      res.json(deletedPost);
    })
    .catch((err) => res.json(err));
});
// Export module
module.exports = router;