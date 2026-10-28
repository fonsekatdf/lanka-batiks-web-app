import productsModel from "../models/productsModel.js";
import fs from "fs";

// add product item

const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const product = new productsModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await product.save();
    res.json({ sucess: true, message: "Product Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while adding product" });
  }
};

export { addProduct };
