// Import express router
const router = require('express').Router();
// Import user model
const { User } = require('../../models');

// Create new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// User login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password!' });
        return;
      }
  
      const checkPassword = await userData.checkPassword(req.body.password);
  
      if (!checkPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: userData, message: 'You are logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // User logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;