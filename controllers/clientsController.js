const db = require('../config/database');
const { isValidName } = require('../helpers/validationHelpers');

exports.getAllClients = (req, res) => {
  db.query('SELECT * FROM Clients', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createClient = (req, res) => {
  const { nome, telefone } = req.body;

  if (!isValidName(nome)) {
    return res.status(400).json({ message: 'The name must contain at least two words, each with at least three letters.' });
  }
  
  db.query('INSERT INTO Clients (nome, telefone) VALUES (?, ?)', [nome, telefone], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Success in create a client', client: { id: result.insertId, nome, telefone } });
  });
};

exports.updateClient = (req, res) => {
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
  
    db.query(`UPDATE Clients SET ${fields} WHERE id = ?`, [...values, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const updatedClient = { id: id, ...paramsToUpdate };
    res.status(200).json({ message: 'Success in update a client', client: updatedClient });
    });
  };

exports.deleteClient = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM Clients WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(204).json({ message: 'Success in delete user' });
    });
};