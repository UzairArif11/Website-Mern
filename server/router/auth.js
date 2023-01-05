const express = require("express");
const { findOne } = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../model/userSchema");
//middleware
const middleware = (req, res, next) => {
  console.log("Hello from middlware");
  next();
};
router.get("/", (req, res) => {
  res.send(`Hello from the server`);
});
router.get("/about", middleware, (req, res) => {
  console.log("Hello from About");
  res.send(`Hello About from the server`);
});
router.get("/contact", (req, res) => {
  res.send(`Hello Contact from the server`);
});

router.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!password || !email) {
      return res.status(400).json({ error: "Plz fill the data" });
    }
    const userlogin = await User.findOne({ email });

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      if (isMatch) {
        //generate token in userSchema
        const token = await userlogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token,{
          expires: new Date(Date.now() + 2589200000),
          httpOnly:true 
        });
        res.json({ massage: "User registered successfully" });
      } else {
        res.status(400).json({ error: "Invalid Credientials" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Pls filled the field properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password doesnot match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ massage: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;