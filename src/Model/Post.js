const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  userPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;
