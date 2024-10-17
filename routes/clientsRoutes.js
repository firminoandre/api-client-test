const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');
const checkIfClientIdExists = require('../middlewares/checkClientExists');

router.get('/', clientsController.getAllClients);
router.post('/', clientsController.createClient);
router.patch('/:id', checkIfClientIdExists, clientsController.updateClient);
router.delete('/:id', checkIfClientIdExists, clientsController.deleteClient);

module.exports = router;