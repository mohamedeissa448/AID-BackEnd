var express = require('express');
var router = express.Router();
var usersController=require("../controllers/usersControllers")

/* GET users listing. */
router.post('/login', function(req, res, next) {
  usersController.login(req,res)
});
router.post('/logout', function(req, res, next) {
  usersController.logout(req,res)
});
module.exports = router;
