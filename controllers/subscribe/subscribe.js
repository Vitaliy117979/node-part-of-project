const User = require("../../models/user");

const { sendEmail } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { subscription, email } = req.body;
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { subscription }, { new: true });
  res.json({ subscription });

 
    const subscribedEmail = { to: email };
    if (subscription === "subscribe") {
      subscribedEmail.subject = "You are subscribed to our api";
      subscribedEmail.html =
        `<div style = "width: 100%; height: 300px; background-color: #ddd; text-align: center;">
        <h2 style = "padding: 20px; font-size: 30px; color: #8BAA36;">Congratulations. You are subscribed to our service So Yummy!</h2></div>`;
    } else {
      subscribedEmail.subject = "You are unsubscribed to our api";
      subscribedEmail.html =`<div style = "width: 100%; height: 300px; background-color: #ddd; text-align: center;">
      <h2 style = "padding: 20px; font-size: 30px; color: #1E1F28;">You are unsubscribed to our service So Yummy. We hope you will be back soon</h2></div>`;
    }

    await sendEmail(subscribedEmail);

};

module.exports = { updateSubscription };
