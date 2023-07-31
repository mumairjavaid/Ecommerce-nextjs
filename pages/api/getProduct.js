import Product from "../../models/Product";
import connectdb from "../../middleware/connectdb";

const getProduct = async (req, res) => {
  let products = await Product.find();
  let tshirts = {};
  for (let item of products) {
    if (item.name in tshirts) {
      if (
        !tshirts[item.name].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.name].color.push(item.color);
      }
      if (
        !tshirts[item.name].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.name].size.push(item.size);
      }
    } else {
      tshirts[item.name] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.name].color = [item.color];
        tshirts[item.name].size = [item.size];
      }
    }
  }
  res.status(200).json({ tshirts });
};

export default connectdb(getProduct);
