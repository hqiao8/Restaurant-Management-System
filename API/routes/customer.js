const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const Item = require("../models/Item");
const User = require("../models/User");

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





module.exports = Router;