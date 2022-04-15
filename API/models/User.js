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
    },
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
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
        type: OrderSchema,
        default: {
            items: [],
            total: 0,
            itemTotal: 0,
            isDelivery: false,
            address: "",
            deliveryFees: 0,
            isComplete: false,
            time: 0,
            couponCode: "",
            couponDiscount: 0
        }
    },
    orderHistory: {
        type: [OrderSchema],
        default: []
    }

});

module.exports = mongoose.model("User", userSchema);