const express = require('express');
const { createReport } = require('../controllers/reportController');

const router = express.Router();

router.post('/', createReport);

module.exports = router;
