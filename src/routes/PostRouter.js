const express = require('express');
const router = express.Router();

const controller = require('../controller/PostController');

router.post('/', controller.post);

module.exports = router;