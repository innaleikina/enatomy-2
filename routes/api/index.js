const express = require('express');
const passport = require('passport');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});



//log in
router.get('/login', passport.authenticate('auth0', {
        scope: 'openid email profile'
    }),
    function (req, res) {
        res.redirect("/");
    });

//redirect to home page after logout
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect("https://enatomy.auth0.com/v2/logout/?returnTo=http://localhost:3004");

});


//callback requered by the auth0 documentation
router.get('/callback',
    passport.authenticate('auth0', {
        failureRedirect: '/failure'
    }),
    function (req, res) {
        res.redirect(req.session.returnTo || '/');
    }
);


//error pages if something fails with auth0
router.get('/failure', function (req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});

module.exports = router;