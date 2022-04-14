const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const Item = require("../models/Item");
const User = require("../models/User");
const Coupon = require("../models/Coupon");

// Verifies if the user's token is real and checks if they're a manager and retrieves that user.
Router.use( async (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access Denied");
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //console.log(verified);
        req.user = await User.findById(verified["_id"]);
        if(req.user.type !== "M") return res.status(401).send("Access Denied");
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
});

Router.get("/", (req, res) => {
    res.json(req.user);
});

Router.post("/addCoupon", async (req, res) => {
    const coupon = new Coupon({
        code: req.body.code,
        discount: req.body.discount,
        isPercent: req.body.isPercent
    });

    try {
        res.send(await coupon.save());
    } catch (err) {
        res.json({message: err});
    }
});

Router.post("/changeType", async (req, res) => {
    const user = await User.findById(req.body.userId);
    const n = req.body.type;
    // Assigns the new type only if it is C, M, or S.
    user.type = (n === "C") ? "C" : (n === "S") ? "S" : (n === "M") ? "M" : user.type;
    await user.save();
});

module.exports = Router;