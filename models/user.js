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
    favorites: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Recipe",
        },
      ],
      required: true,
    },
    shoppingList: {
      type: [
        {
          _id: false,
         id: {
            type: String,
          ref: "Ingredient",
          required: true,

          },
          newId: {
            type: String,
      required: true,

          },
          measure: {
            type: String,
      required: true,

          },
        },
      ],
    },
    avatarURL: String,
    token: String,
  },
  { versionKey: false, timestamps: true },
  { usePushEach: true }
);

userSchema.post("save", handleMongooseError);

const User = model("User", userSchema);

module.exports = User;
