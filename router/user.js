const express = require('express');
const router = express.Router();
const user = require('../controller/user');
//sign in
router.get('/signin',user.signin);
//signup
router.get('/signup',user.signup);
module.exports= router;