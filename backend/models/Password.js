const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  website: String,
  username: String,
  password: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Password', passwordSchema);
