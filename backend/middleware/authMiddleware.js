const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Received token:', token); // Debug log

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded); // Debug log

      // Check if the token is expired
      if (Date.now() / 1000 > decoded.exp) {
        console.log('Token expired'); // Debug log
        return res.status(401).json({ message: 'Token expired, please log in again' });
      }

      // Get user from token
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
        console.log('User not found for ID:', decoded.id); // Debug log
        return res.status(401).json({ message: 'User not found' });
      }

      next();
    } catch (error) {
      console.error('Token verification error:', error.message); // Improved logging
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('No token provided'); // Debug log
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = protect;