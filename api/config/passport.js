const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Securities = require("../models/Securities");
const Admin = require("../models/Admin");
const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = async (email, password, done) => {
  try {
    const security = await Securities.findOne({ email });

    if (!security) {
      const admin = await Admin.findOne({ email });
      if (!admin) return done(null, false);

      const hash = await admin.setHash(password, admin.salt);
      if (hash === user.password) return done(null, user);
    }

    const hash = await security.setHash(password, security.salt);
    if (hash === security.password) return done(null, security);

    return done(null, false);
  } catch (error) {
    return done(error);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const security = Securities.findByPk(id);
  if (!security) {
    const admin = Admin.findByPk(id);
    return done(null, admin);
  }
  return done(null, security);
});

module.exports = passport;
