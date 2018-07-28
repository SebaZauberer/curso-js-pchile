const express = require('express');
const router = express.Router();
const ctrlHome = require('../controllers/controler');

router.get('/', ctrlHome.home)

module.exports = router;