const express = require('express');
const router = express.Router();

const controller = require('../controller/AboutController');

router.get('/', controller.about);

module.exports = router;