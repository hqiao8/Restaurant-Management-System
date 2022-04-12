const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


Router.post('/register', async (req, res) => {

    const rb = req.body;
    
    const emailExists = await User.findOne({email: rb.email});
    if(emailExists) return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(rb.password, salt)

    const user = new User({
        name: rb.name,
        email: rb.email,
        password: hashPassword,
        type: "C"
    });

    try {
        res.send(await user.save());
    } catch (err) {
        res.json({message: err});
    }
});

Router.post("/login", async (req, res) => {
    const rb = req.body;
    const user = await User.findOne({name: rb.name});
    if(!user) return res.status(400).send("The user does not exist.");

    if(user.type != rb.type) return res.status.send("Invalid User type");

    const validPass = await bcrypt.compare(rb.password, user.password);
    if(!validPass) return res.status.send("Invalid Password");

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    res.header("auth-token", token)
       .send(token);

});


module.exports = Router;