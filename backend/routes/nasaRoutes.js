const express = require('express');
const router = express.Router();
const nasaController = require('../Controllers/nasaController');

router.get('/api/nasa-data', nasaController.fetchNASAData);

module.exports = router;