const db = require('../config/database');

const checkClientExists = (req, res, next) => {
  const { id } = req.params;

  db.query('SELECT * FROM Contacts WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    next();
  });
};

module.exports = checkClientExists;