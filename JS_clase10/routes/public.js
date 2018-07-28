const express = require('express');
const router = express.Router();
const ctrlHome = require('../controllers/controler');

router.get('/', ctrlHome.home);
router.post('/create', ctrlHome.save);
router.get('/find', ctrlHome.find);

module.exports = router;