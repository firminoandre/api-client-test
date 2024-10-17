const connection = require('../config/database');

connection.connect((err) => {
    if (err) throw err;
  
    const sql = `
      CREATE TABLE IF NOT EXISTS Clients (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255),
        telefone VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
  
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log('Created table');
      connection.end();
    });
  });