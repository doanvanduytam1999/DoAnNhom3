const express = require('express');
const AdminController = require('../controllers/viewsAdminController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/login', authController.loginAdmin);
router.get('/logout', authController.logoutAdmin);

module.exports = router;