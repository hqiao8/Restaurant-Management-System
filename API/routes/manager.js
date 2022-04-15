const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const Item = require("../models/Item");
const User = require("../models/User");
const Coupon = require("../models/Coupon");
const Staff = require("../models/Staff");
const mongoose = require("mongoose");

// Verifies if the user's token is real and checks if they're a manager and retrieves that user.
Router.use( async (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access Denied");
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //console.log(verified);
        req.user = await User.findById(verified["_id"]);
        //console.log(verified["_id"]);
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
    try{
    const user = await User.findOne({_id: req.body.userId});
    const n = req.body.type;
    // Assigns the new type only if it is C, M, or S.
    user.type = (n === "C") ? "C" : (n === "S") ? "S" : (n === "M") ? "M" : user.type;
    res.json(await user.save());
    } catch (err) {
        res.json({message: err});
    }
});

Router.post("/addItem", async (req, res) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        type: req.body.type
    });
    res.json(await item.save());
});

Router.get("/getStaff", async (req, res) => {
    const staff = await Staff.find();
    res.json(staff);
});

Router.post("/toStaff", async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        user.type = "S";
        const staff = new Staff({
            userId: req.body.userId
        });
        await user.save();
        await staff.save();
        res.json(staff);
    } catch (err) {
        res.json({message: err});
    }
    
});

Router.put("/setHours", async (req, res) => {
    const staff = await Staff.findById(req.body.staffId);
    staff.hours = req.body.hours;
    res.json(await staff.save());
});

Router.get("/staffRatings", async (req, res) => {
    const staff = await Staff.find();
    const staffRatings = [];
    for (let i = 0; i < staff.length; i++) {
        let ratings = staff[i].ratings.map(e => e.rating);
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
        }
        let average = sum / ratings.length;
        
        staffRatings[i] = {
            staffId: staff[i]._id,
            rating: average
        }
    }
    res.json(staffRatings); 
});

Router.get("/staffRatings/:staffId", async (req, res) => {
    const staff = await Staff.findById(req.params.staffId);
    //res.json(staff)

    let ratings = staff.ratings.map(e => e.rating);
    let sum = 0;
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i];
    }
    let average = sum / ratings.length;

    res.json({
        staffId: staff._id,
        rating: average
    }); 
});

module.exports = Router;