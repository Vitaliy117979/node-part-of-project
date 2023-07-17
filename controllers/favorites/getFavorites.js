const User = require("../../models/user");
const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

const getFavorites = async (req, res, next) => {
    const userId = req.user._id;
    const favoritesArray = req.user.favorites;
    console.log(favoritesArray);
const result =  await Recipe.find({ _id: { $in: favoritesArray } }).populate("ingredients.id")

    res.status(200).json( result ); 

};

module.exports = { getFavorites };
