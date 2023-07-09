const HttpError = require("../../helpers/HttpError");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = process.env;
const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Unauthorized (email or password is wrong)");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    message: "Successful login",
    token,
    user: {
      email: user.email,
      name: user.name,
    },
  });
};

module.exports = { login };
