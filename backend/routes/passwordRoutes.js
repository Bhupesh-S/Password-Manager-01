const express = require('express');
const router = express.Router();
const { addPassword, getPasswords } = require('../controllers/passwordController');
const protect = require('../middleware/authMiddleware');

router.post('/add', protect, addPassword);
router.get('/all', protect, getPasswords);

module.exports = router;
