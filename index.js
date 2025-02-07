import express from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./error.js";
import { dbConnect } from "./db.js";
import cors from "cors";
import { get_products, add_product, delete_product } from "./controllers.js";


// Load environment variables
dotenv.config({
    path: "./.env",
});



// Connect to the database
dbConnect();

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json()); // Middleware to parse JSON requests


app.get('/api/products', get_products);

app.post('/api/products', add_product);

app.delete('/api/products/:id', delete_product);



// Error handling middleware
app.use(errorMiddleware);

app.listen(4000, () => {
    console.log(`app is listening on ${port}`);
});