const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Authentication = require("../Middleware/Authentication");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/", (req, res) => {
  res.send(`Hello from the server`);
});
router.get("/aboutUs", Authentication, (req, res) => {
  console.log("Hello from About");
  res.send(req.rootUser);
});
router.get("/getData", Authentication, (req, res) => {
  res.send(req.rootUser);
});
router.post("/contactUs", Authentication, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Plz fill the contact data" });
    }
    const useContact = await User.findOne({ _id: req.userID });
    if (useContact) {
      const userMessage = await useContact.addMessage(name, email, message);
      await useContact.save();

      res.status(201).json({ massage: "user Contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signIn", async (req, res) => {
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
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        });
        res.json({ massage: "User login successfully" });
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
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
