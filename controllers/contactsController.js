const db = require('../config/database');
const { isValidName } = require('../helpers/validationHelpers');

exports.getAllContacts = (req, res) => {
  db.query('SELECT * FROM Contacts', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.createContact = (req, res) => {
  const { nome, telefone } = req.body;

  if (!isValidName(nome)) {
    return res.status(400).json({ message: 'The name must contain at least two words, each with at least three letters.' });
  }
  
  db.query('INSERT INTO Contacts (nome, telefone) VALUES (?, ?)', [nome, telefone], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Success in create a contact', client: { id: result.insertId, nome, telefone } });
  });
};

exports.updateContact = (req, res) => {
    const { id } = req.params;
    const paramsToUpdate = req.body;
    const allowedFields = ['nome', 'telefone'];
  
    const updateKeys = Object.keys(paramsToUpdate);

    for (const key of updateKeys) {
        if (!allowedFields.includes(key)) {
            return res.status(400).json({ message: `The param "${key}" is not allowed.` });
        }
    }

    if (paramsToUpdate.nome && !isValidName(paramsToUpdate.nome)) {
        return res.status(400).json({ message: 'The name must contain at least two words, each with at least three letters.' });
    }

    const fields = Object.keys(paramsToUpdate).map(key => `${key} = ?`).join(', ');
    const values = Object.values(paramsToUpdate);
  
    db.query(`UPDATE Contacts SET ${fields} WHERE id = ?`, [...values, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const updatedClient = { id: id, ...paramsToUpdate };
    res.status(200).json({ message: 'Success in update a contact', client: updatedClient });
    });
  };

exports.deleteContact = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM Contacts WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(204).json({ message: 'Success in delete contact' });
    });
};