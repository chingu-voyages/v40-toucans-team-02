const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    require: true,
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 6,
  },
  commutes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commute",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
