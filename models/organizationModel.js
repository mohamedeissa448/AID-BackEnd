const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema({
  Name: String,
  Location: String,
  userName: String,
  password: String
});
module.exports = mongoose.model("Organization", organizationSchema);
