const mongoose = require("mongoose");
const OrderSchema = require("./Order");

const favourite = mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    type: {
        type: String,
        default: "C"
    },
    favourites: {
        type: [favourite],
        default: []
    },
    currentOrder: {
        type: OrderSchema
    },
    orderHistory: {
        type: [OrderSchema],
        default: []
    }

});

module.exports = mongoose.model("User", userSchema);