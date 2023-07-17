const HttpError = require("../../helpers/HttpError");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../../models/user");
const { SECRET_KEY } = process.env;
const bcrypt = require("bcrypt");
const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
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
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    message: "Successful login",
    token,
    user: {
      email: user.email,
      name: user.name,
      avatarURL: user.avatarURL
    },
  });
};

module.exports = { login };
