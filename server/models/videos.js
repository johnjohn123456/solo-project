const mongoose = require('mongoose');

const Videos1 = mongoose.model('Video1', {
  videos: {
    type: Array,
  },
});

module.exports = {
  Videos1
}
