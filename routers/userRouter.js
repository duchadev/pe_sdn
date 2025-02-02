const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const userController = require('../controller/userController');

router.post('/login', userController.login);
router.post('/register',  userController.register);


module.exports = router;
