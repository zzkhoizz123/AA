const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role:{
      type: String,
      required: true
  }
});

module.exports = Item = mongoose.model('user', UserSchema);