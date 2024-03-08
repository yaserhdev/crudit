// Import express router
const router = require('express').Router();
// Import user module
const user = require('./user');
// Use middleware
router.use('/users', user);
// Export module
module.exports = router;
