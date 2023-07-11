const Recipe = require("../../models/recipe");
const HttpError = require("../../helpers/HttpError");

const searchByTitle = async (req, res, next) => {
  const keyword = req.query.keyword;
console.log(req.query);
  if (!keyword) {
    throw HttpError(400, "No search keyword specified");
  }

  const result = await Recipe.find({
    title: { $regex: keyword, $options: "i" },
  });

  if (result.length === 0) {
    res.status(200).json({ message: "No recipes was found for your request" });
  }

  res.status(200).json(result);
};

module.exports = { searchByTitle };
