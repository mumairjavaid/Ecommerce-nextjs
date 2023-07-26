import React from "react";
import Product from "../../models/Product";
import connectdb from "../../middleware/connectdb";

const deleteProducts = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndDelete(req.body[i]._id, req.body[i]);
    }
  }
  res.status(200).json({ success: "success" });
};

export default connectdb(deleteProducts);
