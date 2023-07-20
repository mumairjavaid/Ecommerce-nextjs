import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    title: { type: String, required: true },
    orderId: { type: Number, required: true },
    products: [
      {
        productid: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
    status: { type: String, default: "pending" },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
