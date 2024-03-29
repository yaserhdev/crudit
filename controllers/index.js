// Import express router
const router = require('express').Router();
// Import api and home routes
const apiRoutes = require('./api');
const homeRoutes = require('./homepage.js');
// Use middleware
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// Export module
module.exports = router;