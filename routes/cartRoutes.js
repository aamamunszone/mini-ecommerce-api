const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addToCart);
router.route('/:id').delete(protect, removeFromCart);

module.exports = router;
