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
        type: mongoose.Types.Decimal128,
        default: 0,
        required: true
    },
    itemTotal: {
        type: mongoose.Types.Decimal128,
        default: 0,
        required: true
    },
    isDelivery: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        default: ""
    },
    deliveryFees: {
        type: Number,
        default: 0
    },
    isComplete: {
        type: Boolean,
        default: false,
        required: true
    },
    time: {
        type: Date,
        default: 0
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