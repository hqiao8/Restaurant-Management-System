const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Staff = require("../models/Staff");

// Verifies if the user's token is real and checks if they're a staff and retrieves that user.
Router.use( async (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access Denied");
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //console.log(verified);
        req.user = await User.findById(verified["_id"]);
        if(req.user.type !== "S") return res.status(401).send("Access Denied");
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
});

Router.get("/", async (req, res) => {
    res.json(await Staff.findOne({userId: req.user._id}));
});

Router.get("/getOrders", async (req, res) => {
    const staff = await Staff.findOne({userId: req.user._id});
    res.json(staff.orders.sort((a, b) => b.time - a.time));
});

Router.delete("/completeOrder", async (req, res) => {
    const staff = await Staff.findOne({userId: req.user._id});
    const order = staff.orders.find(e => e.orderId === req.body.orderId);
    const cust = await User.findById(order.userId);
    for (let i = 0; i < cust.orderHistory.length; i++) {
        if(cust.orderHistory[i]._id === req.body.orderId)
            cust.orderHistory[i].isComplete = true;
    }
    staff.orders = staff.orders.filter((v, i, a) => v.orderId !== req.body.orderId);
    await cust.save();
    await staff.save();
    res.json();
});

Router.get("/getHours", async (req, res) => {
    const staff = await Staff.findOne({userId: req.user._id});
    res.json(staff.hours);
});


module.exports = Router;