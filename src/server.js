const express = require('express');
const cors = require('cors');
const router = require('./http/router');

const app = express();

app.use(express.json());

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      'http://localhost:4000',
      'http://154.38.163.221:4000'
    ];

    // permite requests sin origin (curl, postman)
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS bloqueado'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(router);

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor escuchando en http://0.0.0.0:3000');
});


const express = require('express');
const cors = require('cors');
const router = require('./http/router');

const app = express();

app.use(express.json());

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      'http://154.38.163.221:4000'
    ];

    // Permite curl / postman (sin origin)
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS bloqueado'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(router);

app.listen(3000, '0.0.0.0', () => {
  console.log('Backend remoto activo en http://154.38.163.221:3000');
});
