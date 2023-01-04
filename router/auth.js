const express= require('express');
const router = express.Router();

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
router.get("/login", (req, res) => {

});
router.post("/register", async(req, res) => {
  const {name, email, phone, work, password, cpassword} = req.body;
  if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error:"Pls filled the field properly"})
  }
  try {
    const userExist = await User.findOne({email:email});
    if(userExist){
      return res.status(422).json({error:"Email already exist"});
    }
    const user = new User({name, email, phone, work, password, cpassword});
    await user.save();
    res.status(201).json({massage:"user registered successfully"});

  } catch (err) {
    console.log(err);
  }

});

   module.exports = router;