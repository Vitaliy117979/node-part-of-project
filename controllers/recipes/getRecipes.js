const Resipe = require("../../models/recipe")
const Category = require("../../models/category")

async function getRecipesList(req, res, ) {
    console.log(req.user);
    const list = await Resipe.find().populate("ingredient")
    console.log(list);
        res.status(200).json(list);
   
}

module.exports = getRecipesList