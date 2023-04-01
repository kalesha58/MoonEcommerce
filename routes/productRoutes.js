import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { createProductController, getProductController } from "../controllers/productCotroller.js";

const router = express.Router();
//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
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
  export default router;