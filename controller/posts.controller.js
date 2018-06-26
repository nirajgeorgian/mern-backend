const PostSchema = require('../models/posts.model')

exports.create = (req, res) => {
  // validate body data
  console.log(req.body);
  if(!req.body.body) {
    return res.status(400).send({
      message: 'Cannot post empty post'
    })
  }

  // else create a new posts
  const Post = new PostSchema({
    title: req.body.title,
    body: req.body.body,
    name: req.body.name,
    date: Date.now()
  })
  Post.save()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured'
      })
    })
}

exports.findAll = (req, res) => {
  PostSchema.find()
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'SOme error occured'
      })
    })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}
