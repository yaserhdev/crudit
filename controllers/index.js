// Import express router
const router = require('express').Router();

// const { Module } = require('module');
// const { Model } = require('../config/connection');

// Import api and home routes
const apiRoutes = require('./api');
const homeRoutes = require('./homepage.js');
// Use middleware
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// Export module
module.exports = router;

