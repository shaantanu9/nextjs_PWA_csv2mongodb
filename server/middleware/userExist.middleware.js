// middleware that checks if the user exists
const Users = require("../models/user.Model");

//
// Language: javascript

const userExist = async (req, res, next) => {
  console.log("middleware");
  const user = await Users.findOne({ email: req.body.email }).lean();
  if (user) {
    return res.status(400).send("User already exist");
  }
  next();
};

module.exports = userExist;
