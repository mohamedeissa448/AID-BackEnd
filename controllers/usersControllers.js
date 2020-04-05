const jwt = require('jsonwebtoken');
const passport = require("passport");
const config=require("../config")

module.exports={
    login:(req,res)=>{
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user   : user
                });
            }
           req.login(user, {session: false}, (err) => {
               if (err) {
                   res.send(err);
               }
               // generate a signed son web token with the contents of user object and return it in the response
               const token = jwt.sign(user, config.passportSecretKey);
               return res.json({user, token});
            });
        })(req, res);
    },
    logout:(req,res)=>{
        
    }
}