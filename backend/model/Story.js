const mongoose = require('mongoose');

const SlideSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
});

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: String,
  thumbnail: {
    type: String,
    required: true
  },
  slides: [SlideSchema]
});

module.exports = mongoose.model('Story', StorySchema);
