const express = require('express');
const router = express.Router();

router.post('/productos', (req, res) => {
  res.json({ message: 'Llegó al router danielcorona' });
});

module.exports = router;






