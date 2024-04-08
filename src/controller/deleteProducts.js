import { Product } from "../models/Products.js";

export const deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "Product deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message});
  }
};