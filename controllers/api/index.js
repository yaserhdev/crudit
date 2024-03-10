// Import express router
const router = require('express').Router();
// Import user module
const user = require('./user');
const post = require('./post');
// Use middleware
router.use('/users', user);
router.use('/posts', post);
// Export module
module.exports = router;
