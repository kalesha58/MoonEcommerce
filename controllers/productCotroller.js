import Product from "../model/productModel.js";
import categoryModel from "../model/categoryModel.js";
import fs from "fs";
import slugify from "slugify";
import braintree from "braintree";
import dotenv from "dotenv";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
// import product from "../data/db.json"  assert {type: 'json'};
dotenv.config();
// {====================Create-Product========= ADMIN  ++++=================}
export const createProduct = async (req, res, next) => {
  try {
    //  req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting products",
      error: error.message,
    });
  }
};

//get all products
export const getProductController = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")

      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      TotalCount: products.length,
      message: "ALlProducts ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting products",
      error: error.message,
    });
  }
};

// {========================DELETE-PRODUCT--------------------------===================}
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});
// {======================GET-SINGLE-PRODUCT-DETAILS=====================}

export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// const insertProduct = async () => {
//   try {
//     const docs = await productModel.insertMany(product);
//     return Promise.resolve(docs);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// insertProduct()
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));
