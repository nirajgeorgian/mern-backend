const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const request = require('request')
const UserSchema = require('../models/user.model')
var { generateToken, sendToken } = require('../utils/token.utils')

router.route('/auth/google')
  .post(passport.authenticate('google-token', { session: false }), function(req, res, next) {
    if(!req.user) {
      res.send(401, { message: "User not authenticated"})
    }
    req.auth = {
      id: req.user.id
    }
    next()
  }, generateToken, sendToken)

  module.exports = router
