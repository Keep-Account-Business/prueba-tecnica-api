import { getProducts } from "../Controlller/getProducts.js";
import express from "express";
const router = express.Router();

router.get("/products", getProducts);

export { router };