const express = require('express');
const {signupUser, loginUser} = require('../controllers/signupController');
const router = express.Router();
//Signup Route
router.post('/signup',signupUser);
//login route
router.post('/login',loginUser);
module.exports= router;