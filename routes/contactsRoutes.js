const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const checkIfContactIdExists = require('../middlewares/checkContactExists');

router.get('/', contactsController.getAllContacts);
router.post('/', contactsController.createContact);
router.patch('/:id', checkIfContactIdExists, contactsController.updateContact);
router.delete('/:id', checkIfContactIdExists, contactsController.deleteContact);

module.exports = router;