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

const ItemSchema = mongoose.Schema({
    title: {
      type: String,
      required: true  
    },
    description: {
        type: String,
        required: true  
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    ratings: {
        type: [rating],
        default: []
    }
});

module.exports = mongoose.model("Item", ItemSchema);