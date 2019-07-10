const path = require('path');
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/MovieRoutes");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://scheatham:password@cluster0-oqtle.mongodb.net/form-practice?retryWrites=true&w=majority')

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(movieRoutes);

app.get("/api/movies", (req, res) => {
    res.send(req.body)
});

const port = process.env.PORT || 3001;
  
app.listen(port, () => {
    console.log(`Listening on port:${port}`);
});