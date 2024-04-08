import { getProducts, getProductsByCategory, getCategories, getProductById } from "../controller/getProducts.js";
import { postProducts } from "../controller/postProducts.js";
import express from "express";
import { validateProduct } from "../validations/validateProduct.js";
import { editProducts } from "../controller/editProducts.js";
import { deleteProducts } from "../controller/deleteProducts.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/category", getProductsByCategory);
router.get("/products/:id", getProductById);
router.get("/categories", getCategories);
router.post("/products", validateProduct, postProducts);
router.put("/products/:id", editProducts);
router.delete("/products/:id", deleteProducts);

export { router };