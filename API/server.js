const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

// Initializes the JSON parser
app.use(express.json());

app.use("/api/order",require("./routes/order"));
app.use("/api/user",require("./routes/user"));

mongoose.connect(process.env.DB_CONNECTION,
                () => console.log("connected to database"));


app.listen(3000, () => console.log("Server ready"));