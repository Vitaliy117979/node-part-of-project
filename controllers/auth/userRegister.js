const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HttpError = require("../../helpers/HttpError");
const User = require("../../models/user");
const gravatar = require("gravatar");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const register = async (req, res, next) => {
  const { email, name, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Provided email already exists");
  }

  const createHashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
  });
  const existingUser = await User.findOne({ email });
  const payload = {
    id: existingUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(existingUser._id, { token });

  res.status(201).json({
    message: "Successful operation",
    token,
    user: {
      email: newUser.email,
      name,
    },
  });
};

module.exports = { register };
