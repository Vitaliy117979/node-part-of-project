const Product = require("../../models/product");

const addProductToShoppingList = async (req, res) => {
  const { _id: owner } = req.user;
  const { name, desc, img, measure } = req.body;
  const ingredients = await Product.create({
    name,
    desc,
    img,
    measure,
    owner: owner,
  });

  console.log(ingredients);

  res.status(201).json(ingredients);
};

module.exports = addProductToShoppingList;
