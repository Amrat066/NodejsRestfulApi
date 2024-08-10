const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./Route/userRoute');
const User = require('./model/User');
const Category = require('./model/Category');
const Post = require('./model/Post');
const app = express();
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', userRoute);
app.set('view engine',ejs);

mongoose.connect('mongodb://0.0.0.0:27017/UserInfo')
  .then(async () => {
    console.log('MongoDB connected');
    try {
      await User.init();
      await Category.init();
      await Post.init();
      console.log('All models initialized');
    } catch (e) {
      console.log('Error initializing models', e);
    }
  })
  .catch(err => {
    console.log('Database connection error: ', err);
  });

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
