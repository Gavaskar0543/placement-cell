const express = require('express');
const router = express.Router();
const homecontroller = require('../controller/homepage');
router.get('/',homecontroller.home);
module.exports = router;