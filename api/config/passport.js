const {Admin, Securities }=require("../models")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const { verifyHash } = require("../lib/passwordUtils"); 

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = async (email, password, done) => {
  try {
    const user = await Securities.findOne({ email });

    if (!user) {

        const admin = await Admin.findOne({ email })
        if (!admin) return done(null, false);

        const isValid = await verifyHash(password, user.password, user.salt);
        if (isValid) return done(null, user);

    }

    const isValid = await verifyHash(password, user.password, user.salt);
    if (isValid) return done(null, user);

    return done(null, false);
  } catch (error) {
    return done(error);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);


module.exports = passport