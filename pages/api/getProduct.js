import Product from "../../models/Product";
import connectdb from "../../middleware/connectdb";

const getProduct = async (req, res) => {
  let products = await Product.find();
  res.status(200).json({ products });
};

export default connectdb(getProduct);
