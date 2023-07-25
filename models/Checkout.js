import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    productId: { type: Number, required: true },
    price: { type: Number, required: true },
    color: { type: String },
    variant: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Product", productSchema);
