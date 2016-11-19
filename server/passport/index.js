const passport = require('passport');

const localSignupStrategy = require('./local-signup');
const localLoginStrategy = require('./local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
