const { Op } = require("sequelize");
const Contact = require('../models/Contact');

exports.addContact = (req, res, next) => {
    let contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact
    });

    contact.save().then(contact => {
        res.status(201).json({message: 'contact added with success'})
    }).catch(error => {
        res.status(500).json({message: 'add contact failed'})
    });
}

exports.getContacts = (req, res, next) => {
    console.log(req.query);
    const filterInput ='%'+ req.query.filterInput +'%';
    const limit = +req.query.limit * +req.query.page;
    const offset = (+req.query.page - 1) * +req.query.limit;
    console.log(filterInput);
    Contact.findAndCountAll
    Contact.findAndCountAll({where: {[Op.or]: [{firstName: {[Op.like]: filterInput}}, {lastName: {[Op.like]: filterInput}}, {contact: {[Op.like]: filterInput}}   ]}, limit: limit}).then(contactData => {
        res.status(200).json({contacts: contactData.rows, count: contactData.count});
    }).catch(error => {
        res.status(500).json({message: 'can not find contacts'})
    })
}