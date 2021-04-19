const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.post('', contactController.addContact);
router.get('/search', contactController.getContacts);
// router.get('/myContact', contactController.getMyContacts)

module.exports = router;