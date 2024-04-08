import { Product } from "../models/Products.js";
import { categories } from "../constants/categories.js";

export const editProducts = async (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image } = req.body;

  try {
    if (!categories.includes(category)) {
      return res
        .status(400)
        .json({ message: "Invalid category" });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found" });
    }

    product.title = title || product.title;
    product.price = price || product.price;
    product.description = description || product.description;
    product.category = category || product.category;
    product.image = image || product.image;

    await product.save();

    return res
      .status(200)
      .json({ message: "Product updated successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};