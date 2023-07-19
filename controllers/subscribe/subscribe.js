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
        "Congratulations. You are subscribed to our service So Yummy!";
    } else {
      subscribedEmail.subject = "You are unsubscribed to our api";
      subscribedEmail.html =
        "You are unsubscribed to our service So Yummy. We hope you will be back soon";
    }

    await sendEmail(subscribedEmail);

};

module.exports = { updateSubscription };
