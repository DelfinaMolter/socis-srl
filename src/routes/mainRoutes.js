const express = require('express');
const router = express.Router();

//const main = require('../controllers/mainController')
const mainController = require('../controllers/mainController');

router.get('/', mainController.list)





module.exports = router