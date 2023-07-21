const getCurrent = async (req, res, next) => {
  const { _id, name, email, avatarURL, token } = req.user;
  const user = {
   
      _id,
      name,
      email,
      avatarURL,
      token,
    
  };
  console.log(user);

  res.json({
    user,
  });
};

module.exports = getCurrent;
