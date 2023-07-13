const { Ingredient } = require("../../models/ingredient");

const getListOfIngredients = async (req, res) => {
        const {page = 1, limit = 10} = req.query;
        const skip = (page - 1) * limit;
  const ingredients = await Ingredient.find(null, null, {skip, limit}).sort({ name: 1 });

  res.json(ingredients);
};

module.exports = { getListOfIngredients };
