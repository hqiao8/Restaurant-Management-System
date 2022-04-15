const Router = require("express").Router();
const Item = require("../models/Item");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Coupon = require("../models/Coupon");
const Staff = require("../models/Staff");

// Verifies if the user's token is real and retrieves that user.
Router.use( async (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access Denied");
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //console.log(verified);
        req.user = await User.findById(verified["_id"]);
        next();
    } catch (err) {
        //res.status(400).send("Invalid Token");
    }
});

Router.get("/retrieveOrder", async (req, res) => {
    res.json(req.user.currentOrder);
});

Router.get("/retrieveOrder/:orderId", async (req, res) => {
    res.json(req.user.orderHistory.filter((a) => a._id == req.params.orderId));
});

Router.post("/addItem", async (req, res) => {
    let itemExists = false;
    for (let i = 0; i < req.user.currentOrder.items.length && !itemExists; i++) {
        if(req.user.currentOrder.items[i].itemId == req.body.itemId) {
            itemExists = true;
            req.user.currentOrder.items[i].quantity += req.body.quantity
        }
    }
    if(!itemExists)
        req.user.currentOrder.items.push({
            itemId: req.body.itemId,
            quantity: req.body.quantity
        });

    await req.user.save();
    res.json(req.user.currentOrder.items);
});

Router.delete("/deleteItem", async (req, res) => {
    req.user.currentOrder.items = 
        req.user.currentOrder.items.filter((a) => a.itemId !== req.body.itemId);
    await req.user.save();
    res.json(req.user.currentOrder.items);
});

Router.put("/updateItem", async (req, res) => {
    for (let i = 0; i < req.user.currentOrder.items.length; i++) {
        if(req.user.currentOrder.items[i].itemId == req.body.itemId)
            req.user.currentOrder.items[i].quantity = req.body.quantity;
    }
    await req.user.save();
    res.json(req.user.currentOrder.items);
});

Router.put("/updateDelivery", async (req, res) => {
    req.user.currentOrder.isDelivery = req.body.isDelivery;
    await req.user.save();
    res.json(req.user.currentOrder);
});

Router.put("/updateAddress", async (req, res) => {
    req.user.currentOrder.address = req.body.address;
    await req.user.save();
    res.json(req.user.currentOrder.address);
});

// Calculates total for items
Router.get("/itemTotal", async (req, res) => {
    let sum = 0;
    for (let i = 0; i < req.user.currentOrder.items.length; i++) {
        const item = await Item.findById(req.user.currentOrder.items[i].itemId);
        sum += req.user.currentOrder.items[i].quantity * item.price;
    }
    req.user.currentOrder.itemTotal = sum;
    await req.user.save();
    res.json({total: sum});
});

Router.get("/deliveryFees", async(req, res) => {
    // $5 for delivery and 0 otherwise
    req.user.currentOrder.deliveryFees = 
        req.user.currentOrder.isDelivery ? 5 : 0;
    await req.user.save();
    res.json({delivery: req.user.currentOrder.deliveryFees});
});

Router.post("/applyCoupon", async (req, res) => {
    let sum = 0;
    for (let i = 0; i < req.user.currentOrder.items.length; i++) {
        const item = await Item.findById(req.user.currentOrder.items[i].itemId);
        sum += req.user.currentOrder.items[i].quantity * item.price;
    }

    const coupon = await Coupon.findOne({code: req.body.coupon});
    if(!coupon) {
        res.status(400).json("Invalid coupon code.");
        return;
    }
    const discount = coupon.isPercent ? (sum * coupon.discount / 100)
                   : coupon.discount;
    req.user.currentOrder.couponDiscount = discount;
    await req.user.save();
    res.json({discount: req.user.currentOrder.couponDiscount});
});

Router.get("/orderTotal", async (req, res) => {
    req.user.currentOrder.total = 
        Number(req.user.currentOrder.itemTotal) +
        req.user.currentOrder.deliveryFees -
        req.user.currentOrder.couponDiscount;
    await req.user.save();
    res.json({total: Number(req.user.currentOrder.total)});
});

Router.post("/finalizeOrder", async (req, res) => {
    const orderId = req.user.currentOrder._id;
    req.user.currentOrder.time = Date.now();
    req.user.orderHistory.push(req.user.currentOrder);
    req.user.currentOrder = {
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
    };
    const staffOrder = {
        userId: req.user._id,
        orderId: orderId
    };
    const staff = await Staff.find();
    staff.sort((a , b) => a.orders.length - b.orders.length);
    staff[0].orders.push(staffOrder);
    await req.user.save(); 
    await staff[0].save();
    res.json(orderId);
});

module.exports = Router;