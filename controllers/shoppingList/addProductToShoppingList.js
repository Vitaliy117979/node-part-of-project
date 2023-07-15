const Product = require("../../models/product");

const addProductToShoppingList = async (req, res) => {
 const { _id: owner } = req.user;

  const ingredients = await Product.create({
        ...req.body,
        owner: owner
      });

      console.log(ingredients);

  res.status(201).json({ message: "Products added to Shopping List" });
};

module.exports = addProductToShoppingList;
