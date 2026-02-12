import mongoose from "mongoose";
export const connectionDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        // Debug: Log the URI (be careful with sensitive data in production)
        console.log("🔄 Connecting to MongoDB...");
        console.log("URI length:", process.env.MONGODB_URI.length);
        console.log("URI starts with:", process.env.MONGODB_URI.substring(0, 20));

        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};