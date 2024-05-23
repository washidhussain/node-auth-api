// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) {
        return res.status(401).json({ msg: 'Authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Set user from token payload
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token' });
    }
};
