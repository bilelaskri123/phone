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

exports.getMyContacts = (req, res, next) => {
    const filterInput ='%'+ req.query.filterInput +'%';
    console.log(filterInput);
    Contact.findAll({where: {[Op.or]: [{firstName: {[Op.like]: filterInput}}, {lastName: {[Op.like]: filterInput}}, {contact: {[Op.like]: filterInput}}   ]}}).then(contacts => {
        res.status(200).json({contacts: contacts});
    }).catch(error => {
        res.status(500).json({message: 'can not find contacts'})
    })
}

exports.getContacts = (req, res, next) => {
    const filterInput ='%'+ req.query.filterInput +'%';
    console.log(filterInput);
    Contact.findAll({where: {[Op.or]: [{firstName: {[Op.like]: filterInput}}, {lastName: {[Op.like]: filterInput}}, {contact: {[Op.like]: filterInput}}   ]}}).then(contacts => {
        res.status(200).json({contacts: contacts});
    }).catch(error => {
        res.status(500).json({message: 'can not find contacts'})
    })
}