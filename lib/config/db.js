import mongoose from "mongoose";

export const ConnectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("DB Already Connected");
        return;
    }

    try {
        await mongoose.connect("mongodb+srv://afef:afef2003@cluster0.d0w49.mongodb.net/blogDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
};
