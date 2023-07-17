const User = require("../../models/user");
const { uploadFile } = require("../../middleware");

const updateUserInformation = async (req, res, next) => {
  const { _id, name: oldName, avatarURL } = req.user;
  const { name } = req.body;
  console.log(req.file);
  if(!name && !req.file){
  return res.status(400).json({ message: "missing fields." });
  }
// console.log(req.user);
  if (req.file) {
    if (req.file.size > 3 * 1024 * 1024) {
      return res.status(400).json({ message: "File size exceeds the limit." });
    }
    const { filename, fieldname } = req.file;

    const result = await uploadFile(fieldname, filename);

    const updates = {
    name:  name || oldName,
      avatarURL: result.secure_url,
    };

    await User.findByIdAndUpdate(_id, { $set: updates });

    return res.status(201).json({
    massage: "Your data has been updated successfully",
      name: updates.name,
      avatarURL: updates.avatarURL,
    });
  }

  await User.findByIdAndUpdate(_id, { name });

  res.status(201).json({ 
    massage: "Your data has been updated successfully",
    name,
    avatarURL   
  });
};

module.exports = { updateUserInformation };
