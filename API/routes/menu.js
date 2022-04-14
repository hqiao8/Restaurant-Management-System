const Router = require("express").Router();
const Item = require("../models/Item");

Router.get("/retrieveMenu/:type", async (req, res) => {
    const item = await Item.findOne({type: req.params.type});
    if(!item) return res.status(400).send("No items of that type exist.");

    res.json(await Item.find({type: req.params.type}));
});

Router.get("/retrieveItem/:itemId", async (req, res) => {
    const item = await Item.findOne({_id: req.params.itemId});
    if(!item) return res.status(400).send("Item does not exist.");

    res.json(item);
});

module.exports = Router;