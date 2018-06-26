const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  name: String,
  email: String,
  userId: String,
  token: String
})

userSchema.statics.createGoogleUser = function(accessToken, refrestToken, profile, cb) {
  var that = this;
  return this.findOne({ userId: profile.id }, function(err, user) {
    if(!user) {
      var newUser = new that({
        name: profile.displayName,
        email: profile.emails[0].value,
        userId: profile.id,
        token: accessToken
      })
      newUser.save(function(err, savedUser) {
        if(err) {
          console.log(err);
        }
        return cb(err, savedUser)
      })
    } else {
      cb(err, user)
    }
  })
}

// userSchema.statics.findAllPosts = function(cb) {
//   return this.posts
// }

module.exports = mongoose.model('UserSchema', userSchema)
