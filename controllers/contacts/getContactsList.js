const Contact = require("../../models/contact")

async function getContactsList(req, res, next) {
    const {_id: owner} = req.user

    const list = await Contact.find({owner}).populate("owner", "email subscription");
    console.log(list);
        res.status(200).json(list);

}

module.exports = getContactsList

