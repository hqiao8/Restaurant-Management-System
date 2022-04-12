const Router = require("express").Router();
const Item = require("../models/Item");

Router.get("/", async (req, res) => {
    try {
        res.json(await Item.find());
    }
    catch(err) {
        console.log("There is an error.");
    }
});

Router.post("/", async (req, res) => {
    const post = new Item({
        title: req.body.title,
        description: req.body.description
    });

    try {
        res.json(await post.save());
    } catch (error) {
        console.log("There is an error.");
    }
});

Router.get("/:postId", async (req, res) => {
    try {
        const post = await Item.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
    
});

Router.delete("/:postId", async (req, res) => {
    try {
        const post = await Item.remove({_id: req.params.postId});
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
    
});

Router.put("/:postId", async (req, res) => {
    try {
        const post = await Item.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}});
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = Router;