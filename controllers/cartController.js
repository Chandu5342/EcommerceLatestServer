import { Cart } from "../models/cartModel.js";
import { Product } from "../models/productModel.js";


export const addToCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId, qty } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({ user: userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (i) => i.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].qty += qty;
    } else {
      cart.items.push({ product: productId, qty });
    }

    await cart.save();
    res.json({ message: "Item added to cart", cart });
  } catch (error) {
    next(error);
  }
};


export const removeFromCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();
    res.json({ message: "Item removed from cart", cart });
  } catch (error) {
    next(error);
  }
};


export const getCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    if (!cart) return res.json({ items: [], total: 0 });

    const total = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.qty,
      0
    );

    res.json({ items: cart.items, total });
  } catch (error) {
    next(error);
  }
};
