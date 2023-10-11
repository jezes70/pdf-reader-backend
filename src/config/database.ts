import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI: string = process.env.MONGODB_URI!;

export const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  }
};

export default connect;
