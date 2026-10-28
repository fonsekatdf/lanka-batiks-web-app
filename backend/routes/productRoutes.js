import express from "express";
import { addProduct } from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

// image storage engine

const stoarage = multer.diskStorage({
    destination: "uploads",
    filename:(req, file, cb)=> {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: stoarage})

productRouter.post("/add",upload.single("image"), addProduct)




export default productRouter;

