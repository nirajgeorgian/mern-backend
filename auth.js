const GoogleTokenStrategy = require('passport-google-token').Strategy
const credentials = require('./credentials')
const UserSchema = require('./models/user.model')

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(err, user)
  })

  passport.use(new GoogleTokenStrategy({
    clientID: credentials.clientID,
    clientSecret: credentials.clientSecret
    // callbackURL: credentials.callback
  },
  function(token, refreshToken, profile, done) {
    console.log(token);
    UserSchema.createGoogleUser(token, refreshToken, profile, function(err, user) {
      return done(err, user)
    })
  }))
}
