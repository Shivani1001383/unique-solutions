const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// POST new inquiry (from contact form)
router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: 'Inquiry received successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;