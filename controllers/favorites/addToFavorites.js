const User = require("../../models/user");
const Recipe = require("../../models/recipe");
const Ingredients = require("../../models/ingredient");
const addToFavorites = async (req, res, next) => {
  const recipeId = req.body._id.$oid;
  const userId = req.user._id;

  try {
    const user = await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: recipeId },
    });

    if (user) {
      await Recipe.findByIdAndUpdate(
        { _id: recipeId }, 
        { $inc: { popularity: 1 } }, 
        
      );
  
      res.status(200).json({ message: "Recipe added to favorites successfully" });
      
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { addToFavorites };
