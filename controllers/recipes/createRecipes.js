const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Recipe = require("../../models/recipe");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const createRecipes = async (req, res, next) => {
  try {
    const { title, category, description, time, ingredients, instructions } =
      JSON.parse(req.body.data);

    const uploadImage = multer().single("image");
    uploadImage(req, res, async function (err) {
      if (err) {
        return res.status(500).json({ error: "Failed to upload image" });
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "recipes",
        allowed_formats: ["jpg", "jpeg", "png"],
      });

      const recipeData = {
        title,
        category,
        description,
        time,
        image: result.secure_url,
        ingredients,
        instructions,
      };

      const recipe = await Recipe.create(recipeData);
      res.status(201).json(recipe);
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create recipe" });
  }
};
module.exports = { createRecipes };
