const { HttpError } = require("../../helpers");
const User = require("../../models/user")

const logout = async(req, res, next) => {
    const { id } = req.user;

    const user = await User.findById(id);
  
    if (!user) throw HttpError(401, "This user does not exist");
  
    await User.findByIdAndUpdate(id, { token: "" });
    res.status(204).send();
      
}

module.exports = logout