const Order = require('../models/Order');
const Product = require('../models/Product');

// @desc    Create new order with stock validation & price calculation
// @route   POST /api/orders
exports.addOrderItems = async (req, res) => {
  try {
    const { orderItems } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    let totalPrice = 0;
    const itemsToUpdate = [];

    for (const item of orderItems) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product not found: ${item.name}` });
      }

      if (product.countInStock < item.qty) {
        return res
          .status(400)
          .json({ message: `Insufficient stock for ${product.name}` });
      }

      totalPrice += product.price * item.qty;

      itemsToUpdate.push({ product, qty: item.qty });
    }

    const order = new Order({
      orderItems,
      user: req.user._id,
      totalPrice,
    });

    const createdOrder = await order.save();

    for (const item of itemsToUpdate) {
      item.product.countInStock -= item.qty;
      await item.product.save();
    }

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
