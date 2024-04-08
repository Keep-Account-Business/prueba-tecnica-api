import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true}, 
  price: { type: Number },
  description: { type: String },
  category: { type: String },
  image: { type: String },
});

const Product = mongoose.model("Product", productSchema, "products");
export { Product }