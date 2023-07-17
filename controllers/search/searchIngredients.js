const {Ingredient} = require("../../models/ingredient");
const HttpError = require("../../helpers/HttpError");

const searchIngredients = async (req, res, next) => {
  const keyword = req.query.keyword;
  const {page = 1, limit = 12} = req.query;
  const skip = (page - 1) * limit;
console.log(req.query);
  if (!keyword) {
    throw HttpError(400, "No search keyword specified");
  }

  const result = await Ingredient.find({
    name: { $regex: `^${keyword}`, $options: "i" },
  }, null, {skip, limit})

  if (result.length === 0) {
    res.status(400).json({ message: "No ingredients was found for your request" });
  }

  res.status(200).json(result);
};


module.exports = { searchIngredients };
