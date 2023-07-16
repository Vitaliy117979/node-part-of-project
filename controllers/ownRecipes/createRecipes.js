const Recipe = require("../../models/recipe");
const { uploadFile } = require("../../middleware");

const createRecipes = async (req, res, next) => {
  try {
    const {
      title,
      category,
      description,
      time,
      instructions,
      ingredients,
      area,
      thumb,
      youtube,
      tags,
      popularity,
    } = JSON.parse(req.body.data);

    const result = await uploadFile(req.file.fieldname, req.file.filename);

    const recipeData = {
      title,
      category,
      description,
      time,
      preview: result.secure_url,
      ingredients,
      instructions,
      area,
      thumb,
      youtube,
      tags,
      popularity,
      createdBy: req.user._id,
    };

    const recipe = await Recipe.create(recipeData).catch((error) => {
      console.error(error);
      throw error;
    });

    res.status(201).json({ recipe, message: "Recipe created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create recipe" });
  }
};
module.exports = { createRecipes };
