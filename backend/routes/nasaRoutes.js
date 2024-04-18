// backend/routes/nasaRoutes.js
const express = require('express');
const router = express.Router();
const nasaController = require('../controllers/nasaController');

// Route to fetch data from NASA API
router.get('/nasa-data', nasaController.fetchNASAData);

module.exports = router;
