const express = require('express');
const router = require('./http/router');

const app = express();

app.use(express.json());

// Adapter HTTP
app.use(router);

// 🔒 SOLO LOCAL (nadie desde Internet)
app.listen(3000, '127.0.0.1', () => {
  console.log('Backend LOCAL activo en http://localhost:3000');
});

