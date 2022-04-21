var express = require('express');
const { indexView } = require('../controllers/IndexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexView );




module.exports = router;
