import mongoose, { Schema, model } from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
  });


const Product = mongoose.models.Product || model('Product', productSchema);

export default Product;


