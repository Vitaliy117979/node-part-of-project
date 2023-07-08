const User = require("../../models/user");

const updateUserInformation = async (req, res, next) => {
  const { name } = req.body;
  console.log(req.body);
  const { _id } = req.user;
  if(req.file){
    if (!name) {
      return res.status(400).json({ message: "Name field cannot be empty." });
    }
    const { path: filename, size } = req.file;
    if (size > 3 * 1024 * 1024) {
      return res.status(400).json({ message: "File size exceeds the limit." });
    }

    const updates = {
      name,
      avatarURL: filename,
    };
    await User.findByIdAndUpdate(_id, { $set: updates });
   return res.status(201).json({
      name,
      avatarURL: updates.avatarURL,
    });

  }

  if (!name) {
    return res.status(400).json({ message: "Name field cannot be empty." });
  }

  await User.findByIdAndUpdate(_id, { name });
  res.status(201).json({
    name,
  });
};

module.exports = { updateUserInformation };
// updateUserInformation
