const Cart = require('../models/Cart');

// @desc    Add items to cart
exports.addToCart = async (req, res) => {
  const { productId, name, price, qty } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      const itemIndex = cart.cartItems.findIndex(
        (p) => p.product.toString() === productId,
      );

      if (itemIndex > -1) {
        cart.cartItems[itemIndex].qty += qty;
      } else {
        cart.cartItems.push({ product: productId, name, price, qty });
      }
      cart = await cart.save();
      return res.status(201).json(cart);
    } else {
      const newCart = await Cart.create({
        user: req.user._id,
        cartItems: [{ product: productId, name, price, qty }],
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      cart.cartItems = cart.cartItems.filter(
        (item) => item.product.toString() !== req.params.id,
      );
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
