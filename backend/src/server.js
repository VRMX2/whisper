import "dotenv/config";
import express from "express";
import { connectionDB } from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;


app.
const startServer = async () => {
    await connectionDB();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
};

startServer();