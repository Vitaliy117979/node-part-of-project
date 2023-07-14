const User = require("../../models/user");
const { uploadFile } = require("../../middleware");


const updateUserInformation = async (req, res, next) => {
  console.log(req.file.path);
  const { name } = req.body;
  const { _id } = req.user;
  if (!name) {
    return res.status(400).json({ message: "Name field cannot be empty." });
  }

  if (req.file) {
    if (req.file.size > 3 * 1024 * 1024) {
      return res.status(400).json({ message: "File size exceeds the limit." });
    }
    const { filename } = req.file;
    const result = await uploadFile(req.file.fieldname, filename);

    const updates = {
      name,
      avatarURL: result.secure_url,
    };

    await User.findByIdAndUpdate(_id, { $set: updates });

    return res.status(201).json({
      name: updates.name,
      avatarURL: updates.avatarURL,
    });
  }

  await User.findByIdAndUpdate(_id, { name });

  res.status(201).json({ name });
};

module.exports = { updateUserInformation };
