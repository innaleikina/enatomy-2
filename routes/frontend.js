//var db = require("../models");
var user;

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index")
    })

    app.get("/store", function (req, res) {
        res.render("store")
    })

    app.get("/cart", function (req, res) {
        res.render("cart")
    })

    app.get("/myaccount", function(req, res) {
        res.render("myaccount", {
          text: "random name"
        });
      });

  
};