const express = require('express');
const router = express.Router()
const { createUser, signInUser, createNewUser } = require('../controllers/user.controller')

router.post('/signup', createNewUser );
router.post('/login', signInUser);


module.exports = router;