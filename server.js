const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();

/* connect DB to server */

mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;
        else console.log("DB is connected");
      }
    );
    app.use("/peoples", require("./routes/PeopleRoutes"));


app.listen(5000,()=>console.log ('server is running on port 5000'))