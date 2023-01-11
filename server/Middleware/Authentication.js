const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    //get jwt token from cookies
    const token = req.cookies.jwtoken;
    //verifying token with SECRET_KEY
    const verifyToken = jwt.verify(token, process.env.SECRETKEY);
    // get user data from token, if token id(from cookies)===tokens.token
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("user not found");
    }
    // if get user
    req.token = token;
    // get user's all data in rootUser
    req.rootUser = rootUser;
    // get id od rootUser
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("unauthorized: no token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
