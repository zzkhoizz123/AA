const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SBackLogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status:{
      type: Integer,
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
          type: int, // 0 1 2 3 
          required: true
      },
      owner: {
          type: String,
          required: true
      }
  }]
});

module.exports = SBackLog = mongoose.model('sbacklog', SBackLogSchema);