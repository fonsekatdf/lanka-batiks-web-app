import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import productRouter from "./routes/productRoutes.js";

// app config
const app = express()
const port = 4001

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/products", productRouter);



app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://<db_username>:NlB1rnzaFoXSqnDs@cluster0.dhuxu6g.mongodb.net/?