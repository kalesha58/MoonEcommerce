import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      default:
        "A product description is the marketing copy that explains what a product is and why it’s worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they’re compelled to buy.",
    },
    price: {
      type: Number,
      required: true,
    },
    strike_price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    images: {
      type: String,
      required: true,
    },
    shipping: {
      type: Boolean,
    },
    rating: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
