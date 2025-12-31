const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");

const _db = require("./config/db");
const indexRoutes = require("./routes/index");

_db.connectToServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"))
app.use(express.static(path.join(__dirname, "public/")));
app.use(cookieParser());

app.use("/", indexRoutes);

app.get("*", (req, res) => {
    res.render("404.ejs");
})


app.listen("3000", () => {
  console.log("Application is running successfully");
});

