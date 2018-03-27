const mongoose = require('mongoose');

const Videos = mongoose.model('Video', {
  text: {
    type: String,
  },
  number: {
    type: Number,
  }
});

const Videos1 = mongoose.model('Video1', {
  videos: {
    type: Array,
  },
});

module.exports = {
  Videos,
  Videos1
}