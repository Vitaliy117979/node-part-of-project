const {Ingredient} = require("../../models/ingredient");

const getListOfIngredients = async (req, res) => {
        const result = await Ingredient.find();

        res.json(result.sort((a,b) => a.localeCompare(b)));
};

module.exports = getListOfIngredients;