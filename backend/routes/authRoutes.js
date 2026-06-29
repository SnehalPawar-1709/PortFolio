const express = require('express');
const router = express.Router();
const { loginAdmin, changePassword, verifyToken, setupAdmin } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', loginAdmin);
router.put('/change-password', protect, changePassword);
router.get('/verify', protect, verifyToken);
router.get('/setup-admin', setupAdmin);

module.exports = router;
