import axios from 'axios';

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
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
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
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
    res.status(500).json({ message: err.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${req.params.category}`);
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
    res.status(500).json({ message: err.message });
  }
};