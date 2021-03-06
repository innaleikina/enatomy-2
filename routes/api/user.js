const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();


/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
    // console.log("console log is working " + req.user);
   res.render('myaccount',    
   {
    user: req.user.displayName ,
    userProfile: JSON.stringify(req.user, null, '  ')
  }
);
});

module.exports = router;