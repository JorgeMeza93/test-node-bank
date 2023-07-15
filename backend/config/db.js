import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://root:rootroot@cluster0.egezjtb.mongodb.net/testNodeBank?retryWrites=true&w=majority");
    } catch (error) {
        console.log(`error: ${error.message }`);
        process.exit(1);
    }
}