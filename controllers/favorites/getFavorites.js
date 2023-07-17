const User = require("../../models/user");

const getFavorites = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("favorites");
    console.log("user: ", user);

    const favorites = user.favorites;

    res.status(200).json({ favorites });
  } catch (error) {
    next(error);
  }
};

module.exports = { getFavorites };
