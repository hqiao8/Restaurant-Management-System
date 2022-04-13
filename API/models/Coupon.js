const mongoose = require("mongoose");
const OrderSchema = require("./Order");

const couponSchema = mongoose.Schema({
    couponCode: {
        type: String,
        required: true
    },
    couponDiscount: {
        type: Number,
        required: true
    },
    isPercent: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Coupon", couponSchema);