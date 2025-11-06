import { Cart } from "../models/cartModel.js";
import { Checkout } from "../models/checkoutModel.js";


export const checkout = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const cartItems = cart.items.map((item) => ({
      product: item.product._id,
      qty: item.qty,
      price: item.product.price,
    }));

    const total = cartItems.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );

    const receipt = await Checkout.create({
      user: userId,
      cartItems,
      total,
    });

    // Clear user cart after checkout
    cart.items = [];
    await cart.save();

    res.status(201).json({
      message: "Checkout successful",
      receiptId: receipt._id,
      total,
      timestamp: receipt.timestamp,
    });
  } catch (error) {
    next(error);
  }
};
