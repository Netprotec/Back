const express = require('express');
const cors = require('cors');
const router = require('./http/router');

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    'http://localhost:4000',
    'http://154.38.163.221:4000'
  ]
}));

app.use(router);

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor escuchando en http://0.0.0.0:3000');
});

