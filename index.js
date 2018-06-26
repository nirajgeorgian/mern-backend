const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()

// imports routes
const authRoutes = require('./routes/auth.route')
const postRoutes = require('./routes/posts.route')

// cors configuration
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

// Connect to mongoose
mongoose.connect('mongodb://dodo:dododuckN9@ds139904.mlab.com:39904/dodo', {
    promiseLibrary: global.Promise
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.log(err))




const auth = require('./auth')
auth(passport)
app.use(passport.initialize())
app.use(cors(corsOption))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('', authRoutes)
app.use('', postRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the api'
  })
})

app.listen(8080, () => {
    console.log('Server is running on port 3000');
});
