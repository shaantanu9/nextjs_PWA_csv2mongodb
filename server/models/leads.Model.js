const mongoose = require("mongoose");

const leads = new mongoose.Schema(
  {
    // name, phone, email, linkedin profile url
    name: String,
    phone: String,
    email: String,
    linkedin: String,
  },
  {
    timestamps: true,
  }
);

let Leads = mongoose.model("leads", leads);

module.exports = Leads;
