const User = require("../../models/user");


const updataAvatar = async (req, res, next) => {
    const {_id} = req.user
    const {path: filename, size  } = req.file;
    if(size > 3 * 1024 * 1024){
      return res.status(400).json({ message: 'File size exceeds the limit.' })
    }
    const avatarURL = filename
    await User.findByIdAndUpdate(_id, {avatarURL})
    res.json({
        avatarURL
    })

};

module.exports = {updataAvatar}
