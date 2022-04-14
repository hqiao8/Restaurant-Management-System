const mongoose = require("mongoose");
const OrderSchema = require("./Order");

const couponSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    isPercent: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Coupon", couponSchema);