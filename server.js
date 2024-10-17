const express = require('express');
const bodyParser = require('body-parser');
const clientsRoutes = require('./routes/clientsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/clients', clientsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});