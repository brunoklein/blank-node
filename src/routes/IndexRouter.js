const express = require('express');
const router = express.Router();

const controller = require('../controller/IndexController');

router.get('/', controller.index);
router.get('*', controller.index);

module.exports = router;
