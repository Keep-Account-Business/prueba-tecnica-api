import { getProducts, getProductsByCategory, getCategories, getProductById } from "../controller/getProducts.js";
import { postProducts } from "../controller/postProducts.js";
import express from "express";
import { validateProduct } from "../validations/validateProduct.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/category", getProductsByCategory);
router.get("/products/:id", getProductById);
router.get("/categories", getCategories);
router.post("/products", validateProduct, postProducts);

export { router };