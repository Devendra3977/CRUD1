const express = require('express');
const {signupUser} = require('../controllers/signupController');
const router = express.Router();
//Signup Route
router.post('/signup',signupUser);
//login route

module.exports= router;