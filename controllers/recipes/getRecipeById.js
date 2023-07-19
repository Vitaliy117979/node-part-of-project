const Recipe = require("../../models/recipe")
const {Ingredient} = require("../../models/ingredient"); 

async function getRecipesById (req, res, next){
    const { id } = req.params;
    const recipe = await Recipe.findById(id).populate("ingredients.id");
    if (!recipe) {
        return res.status(404).json({ message: "The recipe does not exist" });
    }
    res.status(200).json(recipe);
}

module.exports = getRecipesById