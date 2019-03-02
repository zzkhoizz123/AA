const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PBackLogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status:{
      type: int,
      required: true
  },
  startDate:{
    type: Date,
    default: Date.now
  },
  endDate:{
    type: Date
  },
  items:[{
      name: {
          type: String,
          required: true
      },
      description:{
          type: String,
          required: true
      },
      status:{
          type: Integer,
          required: true
      },
      owner: {
          type: String,
          required: true
      }
  }]
});

module.exports = PBackLog = mongoose.model('pbacklog', PBackLogSchema);