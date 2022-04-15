const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


Router.post('/register', async (req, res) => {

    const rb = req.body;
    
    const emailExists = await User.findOne({name: rb.name});
    if(emailExists) return res.status(400).send("Username already exists");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(rb.password, salt)

    const user = new User({
        name: rb.name,
        fName: rb.fName,
        lName: rb.lName,
        email: rb.email,
        password: hashPassword,
        type: "C",
    });

    try {
        await user.save()
        res.send(user._id);
    } catch (err) {
        res.json({message: err});
    }
});

Router.post("/login", async (req, res) => {
    const rb = req.body;
    const user = await User.findOne({name: rb.name});
    if(!user) return res.status(400).send("The user does not exist.");

    if(user.type != rb.type) return res.status(400).send("Invalid User type");

    const validPass = await bcrypt.compare(rb.password, user.password);
    if(!validPass) return res.status(400).send("Invalid Password");

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    res.header("auth-token", token)
       .send(token);

});

const getUser = async (req, res, next) => {
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
};

Router.put("/changePassword", getUser, async (req, res) => {

    if(req.body.password === null || (req.body.password !== req.body.confirm)) 
        return res.status(400).send("Password does not match.");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    req.user.password = hashPassword;
    await req.user.save();
    res.json(req.user._id);
    
});


module.exports = Router;