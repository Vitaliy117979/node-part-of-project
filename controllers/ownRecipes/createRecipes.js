const Recipe = require("../../models/recipe");
const { uploadFile } = require("../../middleware");
const ownRecipeSchema = require("../../schemas");

const createRecipes = async (req, res, next) => {
  const { error, value } = ownRecipeSchema.validate(JSON.parse(req.body.data));

  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  const { title, category, description, time, instructions, ingredients } =
    value;

  if (!req.file) {
    res.status(400).json({ error: "Preview file is missing" });
    return;
  }

  const result = await uploadFile(req.file.fieldname, req.file.filename);

  const recipeData = {
    title,
    category,
    description,
    time,
    preview: result.secure_url,
    ingredients,
    instructions,
    area: "",
    thumb: "",
    youtube: "",
    tags: [],
    popularity: 0,
    createdBy: req.user._id,
  };

  const recipe = await Recipe.create(recipeData).catch((error) => {
    console.error(error);
    throw error;
  });

  res.status(201).json({ recipe, message: "Recipe created successfully" });
};
module.exports = { createRecipes };