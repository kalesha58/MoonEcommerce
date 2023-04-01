import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import {
  createProduct,
  deleteProduct,
  getProductController,
  getProductDetails,
  updateProduct,
} from "../controllers/productCotroller.js";

const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,

  createProduct
);

//routes
// router.put(
//     "/update-product/:pid",
//     requireSignIn,
//     isAdmin,
//     formidable(),
//     updateProductController
//   );

//get products
router.get("/get-product", getProductController);
router.delete("/delete-product/:id", requireSignIn, isAdmin, deleteProduct);
router.get("/product-detials/:id", getProductDetails);
router.put("/update-product/:id", requireSignIn, isAdmin, updateProduct);
export default router;
