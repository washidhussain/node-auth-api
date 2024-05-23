// routes/authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post(
    '/register',
    [
        // Input validation
        body('username').not().isEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    authController.register
);

// Login user
router.post(
    '/login',
    [
        // Input validation
        body('email').isEmail().withMessage('Invalid email'),
        body('password').not().isEmpty().withMessage('Password is required')
    ],
    authController.login
);

module.exports = router;
