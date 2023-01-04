const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./DB/conn");

const User = require("./model/userSchema");
app.use(express.json());
// we link the router files to make our route easy
app.use(require("./router/auth"));
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`server is running on PORT ${PORT}`);
});
