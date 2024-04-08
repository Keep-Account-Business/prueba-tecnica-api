import { Product } from "../models/Products.js";

export const postProducts = async (req, res) => {
  const { title, price, description, category, image } = req.body;

  try {
    const newProduct = new Product({
      title,
      price,
      description,
      category,
      image,
    });
    await newProduct.save();

    return res
      .status(200)
      .json({ message: "Product created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error" });
  }
};