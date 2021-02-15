require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://mongo:27017/Efimob?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Organization = mongoose.model("organization", {
  name: String,
  legalentity: String,
});

const ChargePoint = mongoose.model("chargerpoint", {
  identify: String,
});

const User = mongoose.model("user", {
  username: String,
});

module.exports = {
  Organization,
  ChargePoint,
  User,
};



