const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const PostSchema = require('../models/posts.model')
const PostController = require('../controller/posts.controller')

router.route('/posts')
  .post(PostController.create)
  .get(PostController.findAll)


module.exports = router
