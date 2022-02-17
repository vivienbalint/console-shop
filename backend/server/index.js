require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const inventoryRouter = require("./routes/inventory-router");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
const app = express();
const port = 3020;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use("/api", inventoryRouter);

app.listen(port, () => console.log(`Server started on port : ${port}`));
