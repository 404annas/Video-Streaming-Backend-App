import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to the database", err);
});