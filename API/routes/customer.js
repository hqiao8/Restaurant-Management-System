const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const Item = require("../models/Item");
const User = require("../models/User");
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
        res.status(400).send("Invalid Token");
    }
});

//Retrieves the current user's info
Router.get("/", (req, res) => {
    res.json(req.user);
});

Router.get("/retrieveFavourites", async (req, res) => {
    const favourites = [...req.user.favourites];
    favourites.sort((a, b) => b.rating - a.rating); //Descending Order
    res.json(favourites);
});

Router.get("/getUserRating/:itemId", async (req, res) => {
    const rating = req.user.favourites.find(e => e.itemId === req.params.itemId);
    
    res.json(rating);
});

Router.post("/rateItem", async (req, res) => {
    const rating = req.body.rating;
    // Constrains rating between 0 and 5
    rating = (rating < 0) ? 0 : (rating > 5) ? 5 : rating;
    const custRating = {
        itemId: req.body.itemId,
        rating: rating
    };
    const itemRating = {
        userId: req.user._id,
        rating: rating
    };
    const item = await Item.findById(req.body.itemId);
    item.ratings.push(itemRating);
    const cust = await User.findById(req.body.itemId);
    cust.favourites.push(custRating);

    await cust.save();
    await item.save();

});

Router.post("/rateStaff", async (req, res) => {
    const staff = await Staff.findOne({orders: {$elemMatch: {orderId: req.body.orderId}}});
    const r = req.body.rating;
    // Constrains rating between 0 and 5
    r = (r < 0) ? 0 : (r > 5) ? 5 : r;

    const rating = {
        userId: req.user._id,
        rating: r
    }
    staff.ratings.push(rating);
    await staff.save();
});





module.exports = Router;