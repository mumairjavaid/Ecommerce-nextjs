import Product from "../../models/Product";
import connectdb from "../../middleware/connectdb";

const addProducts = async (req, res) => {
  if (req.method == "POST") {
    // let p = new Product({
    //   name: req.body.name,
    //   productId: req.body.productId,
    //   price: req.body.price,
    //   color: req.body.color,
    //   variant: req.body.variant,
    // });
    // await p.save();
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        name: req.body[i].name,
        productId: req.body[i].productId,
        price: req.body[i].price,
        color: req.body[i].color,
        variant: req.body[i].variant,
      });
      await p.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectdb(addProducts);
