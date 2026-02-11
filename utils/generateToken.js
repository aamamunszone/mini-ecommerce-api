const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // Create a Token for One Hour
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

module.exports = generateToken;
