const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema({
  title: String,
  date: Date,
  body: String,
  name: String
})

module.exports = mongoose.model('PostSchema', postSchema)
