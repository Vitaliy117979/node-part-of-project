const Recipe = require("../../models/recipe");
const HttpError = require("../../helpers/HttpError");

const searchByTitle = async (req, res, next) => {
  const keyword = req.query.keyword;
  const {page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
console.log(req.query);
  if (!keyword) {
    throw HttpError(400, "No search keyword specified");
  }

  const result = await Recipe.find({
    title: { $regex: `^${keyword}`, $options: "i" },
  }, null, {skip, limit}).populate("ingredients.id");

  if (result.length === 0) {
    res.status(200).json({ message: "No recipes was found for your request" });
  }

  res.status(200).json(result);
};

module.exports = { searchByTitle };
const obj = {
  area: '',
  thumb: '',
  youtube: '',
  tags: [],
  popularity: Math.floor(Math.random() * 10),
};