const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],

    },
    subscription: {
      type: String,
      enum: ["subscribe", "unsubscribe"],
      default: "unsubscribe",
    },
    avatarURL: String,
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError)

const User = model("User", userSchema)

module.exports = User