const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (res, req, next) => {
  try {
    const token = res.cookies.jwtoken;
    const [t]=token;
   const tk= t.token;
    console.log(tk);
    const verifyToken = jwt.verify(tk, process.env.SECRETKEY);
    console.log(verifyToken);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      
    });
    console.log(rootUser);
    if (!rootUser) {
      throw new Error("User not Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    req.status(401).send("Unauthorized:No token provided");
    console.log(error);
  }
};
module.exports = Authenticate;
