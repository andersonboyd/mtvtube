require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

// const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard kat", resave: true, saveUninitialized: true }));

app.use(routes);
// mongoose.connect(process.env.MONGODD_URI || "mongodb://localhost/mtvtube"); <-- define mongo db

app.listen(PORT, function() {
    console.log(`API server now listening on port ${PORT}!`);
});

module.exports = app;