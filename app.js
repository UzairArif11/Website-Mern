//jhkjsd
//jklfsdj
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./DB/conn");
// const User = require("./model/userSchema");

// we link the router files to make our route easy
app.use(require("./router/auth"));
//jojojdfsf
const PORT = process.env.PORT;

//middleware
const middleware = (req, res, next) => {
  console.log("Hello from middlware");
  next();
};

app.get("/about", middleware, (req, res) => {
  console.log("Hello from About");
  res.send(`Hello About from the server`);
});
app.get("/contact", (req, res) => {
  res.send(`Hello Contact from the server`);
});
app.get("/sigin", (req, res) => {
  res.send(`Hello sigin from the server`);
});
app.get("/signup", (req, res) => {
  res.send(`Hello signup from the server`);
});

app.listen(3000, () => {
  console.log(`server is running on PORT ${PORT}`);
});
