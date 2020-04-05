const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const config=require("./config")
passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, 
    function (userName, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return UserModel.findOne({userName, password})
           .then(user => {
               if (!user) {
                   return cb(null, false, {message: 'Incorrect userName or password.'});
               }
               return cb(null, user, {message: 'Logged In Successfully'});
          })
          .catch(err => cb(err));
    }
));
////////////////////

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.passportSecretKey
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return UserModel.findOneById(jwtPayload._id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));