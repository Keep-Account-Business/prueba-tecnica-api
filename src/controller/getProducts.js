import axios from 'axios';
import { Product } from '../models/Products.js';

export const getProducts = async (req, res) => {
  try {
    const { start = 0, limit = 12, page = 1, title, category } = req.query;

    const response = await axios.get(`https://fakestoreapi.com/products`);
    const apiProducts = response.data.map((product) => {
      return {
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      }
    });
    const filterProduct = (product, title, category) => {
      const titleMatch = !title || product.title.toLowerCase().includes(title.toLowerCase());
      const categoryMatch = !category || product.category === category || category === 'all';
      return titleMatch && categoryMatch;
    };
    const dbProducts = await Product.find();
    const allProducts = [...apiProducts, ...dbProducts];

    const filteredProducts = allProducts.filter(product => filterProduct(product, title, category));

    const productsSlices = filteredProducts.slice(start, limit)
    return res
      .status(200)  
      .json({payload: productsSlices, totalProducts: allProducts.length});
    
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product = response.data;
    return res
      .status(200)  
      .json({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

    if (!categories.includes(category)) {
      return res
        .status(400)
        .json({ message: "Invalid category" });
    }

    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    const products = response.data.map((product) => {
      return {
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      }
    });
    return res
      .status(200)  
      .json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    const categories = response.data;
    return res
      .status(200)  
      .json(categories);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};