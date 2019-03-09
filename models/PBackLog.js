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
      type: Number,
      required: true
  },
  startDate:{
    type: Date,
    default: Date.now
  },
  endDate:{
    type: Date
  },
  items:[
    {
        type: Object
    }
  ]
});

module.exports = PBackLog = mongoose.model('pbacklog', PBackLogSchema);