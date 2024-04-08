import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true}, 
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema, "products");
export { Product }