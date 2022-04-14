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

const order = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
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
        default: ""  
    },
    orders: {
        type: [order],
        default: []
    },
    ratings: {
        type: [rating],
        default: []
    }
});

module.exports = mongoose.model("Staff", StaffSchema);