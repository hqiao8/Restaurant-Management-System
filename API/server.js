const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

const app = express();

// Initializes the JSON parser
app.use(express.json());
app.use(cors());

app.use("/api/order", require("./routes/order"));
app.use("/api/user", require("./routes/user"));
app.use("/api/cust", require("./routes/customer"));
app.use("/api/manager", require("./routes/manager"));
app.use("/api/menu", require("./routes/menu"));
app.use("/api/staff", require("./routes/staff"));

mongoose.connect(process.env.DB_CONNECTION,
                () => console.log("connected to database"));


app.listen(3000, () => console.log("Server ready"));