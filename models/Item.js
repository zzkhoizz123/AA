
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: Number, // 0 neu chưa dc chon, 
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
