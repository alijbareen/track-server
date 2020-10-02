const mognoose = require("mongoose");

const userSchema = new mognoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mognoose.model("User", userSchema);
