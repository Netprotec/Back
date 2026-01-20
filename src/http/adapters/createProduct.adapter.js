class CreateProductHttpAdapter {
  handle(req, res) {
    if (!req.body) {
      return res.status(400).json({ error: 'Request sin body' });
    }

    return res.json({
      message: 'Adapter recibió el request',
      body: req.body
    });
  }
}

module.exports = new CreateProductHttpAdapter();
