const passport = require('passport');
const userModel = require('./Models/userModel');


const LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

function extractJwtFromCookie(req) {
    const token = req.cookies.access_token;
    return token
}

passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        userModel.findOne({ email }, (err, user) => {
            if (err)
                return done(err)
            if (user)
                return user.comparePassword(password, done)
            return done(null, false)
        })
    })
)

passport.use(new JwtStrategy({ jwtFromRequest: extractJwtFromCookie, secretOrKey: process.env.JWT_SECRET }, function (payload, done) {
    userModel.findOne({ _id: payload.id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // Or creation of a new account
        }
    });
}));