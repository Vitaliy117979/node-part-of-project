const {Category} = require("../../models/category")
async function getCategoryList(req, res, ) {
    const list = await Category.find()
    console.log(list);
        res.status(200).json(list);
   
}
module.exports = getCategoryList
