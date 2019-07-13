const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  featuredImg: {
    type: String,
  },
  summary: {
    type: String,
    required: true
  },
  user: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    gravatar: {
      type: String,
    }
  },
  comments: {
    type: [String],
  },
  archived: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

let Post

try {
  Post = mongoose.model('post');
} catch (error) {
  Post = mongoose.model('post', PostSchema);
}

module.exports = Post;