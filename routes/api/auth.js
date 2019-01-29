var express = require('express');
var router = express.Router();
var Auth0Strategy = require('passport-auth0'),
    passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

// Perform the login, after login Auth0 will redirect to callback
router.get('/login',
  passport.authenticate('auth0', {scope: 'openid email profile'}), function (req, res) {
  res.redirect("/");
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  

module.exports = router;