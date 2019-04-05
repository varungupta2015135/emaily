const express = require("express");
const mongoose = require("mongoose");
const keys = require('./config/keys');
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(() => {
        console.log("Connected");
    })
    .catch(err => {
        console.log(err);
    })

const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 2000;
app.listen(PORT);
