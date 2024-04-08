import { getProducts } from "../controller/getProducts.js";
import express from "express";
const router = express.Router();

router.get("/products", getProducts);

export { router };