const mongoose = require("mongoose");

const rating = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const StaffSchema = mongoose.Schema({
    userId: {
      type: String,
      required: true  
    },
    hours: {
        type: String,
        required: true  
    },
    type: {
        type: String,
        required: true
    },
    orders: {
        type: [String],
        default: []
    },
    ratings: {
        type: [rating],
        default: []
    }
});

module.exports = mongoose.model("Staff", StaffSchema);