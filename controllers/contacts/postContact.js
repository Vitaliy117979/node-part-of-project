const Contact = require("../../models/contact")

async function postContact(req, res, next) {
    const {_id: owner} = req.user
    const newContact = await Contact.create({...req.body, owner})
        res.status(201).json(newContact);
        res.end();

}

module.exports = postContact










