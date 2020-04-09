const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config");
const authenticate = require("../authenticate");
const User = require("../models/userModel");
module.exports = {
  login: (req, res) => {
    const token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({ succcess: true, token: token, status: "loging Successful" });
  },
  logout: (req, res) => {},
  signUp: (req, res) => {
    User.register(
      newUser({ username: req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.json({ err: err });
        } else {
          passport.authenticate("local")(req, res, () => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({ succcess: true, status: "Registration Successful" });
          });
        }
      }
    );
  }
};
