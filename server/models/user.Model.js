const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

// Hashing the password before saving it to the database
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Comparing the password entered by the user with the hashed password stored in the database
userSchema.methods.checkPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

let User = mongoose.model("user", userSchema);
module.exports = User;
