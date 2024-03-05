// Declare auth variable
const withAuth = (req, res, next) => {
    // If user is not logged in, redirect to login page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
// Export module
module.exports = withAuth;
  