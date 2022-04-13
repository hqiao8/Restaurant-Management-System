const mongoose = require("mongoose");

const orderItem = mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const OrderSchema = mongoose.Schema({
    items: {
        type: [orderItem],
        default: [],
        required: true
    },
    total: {
        type: Number,
        default: 0,
        required: true
    },
    deliveryFees: {
        type: Number,
        default: 5,
        required: true
    },
    couponCode: {
        type: String
    },
    couponDiscount: {
        type: String,
        default: 0
    }
});

module.exports = OrderSchema;