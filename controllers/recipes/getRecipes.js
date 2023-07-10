const Recipe = require("../../models/recipe")

async function getRecipesList(req, res ) {
    // console.log(req.user);
    const list = await Recipe.find().populate('ingredients.id')
    console.log(list);
        res.status(200).json(list);
   
}
module.exports = getRecipesList