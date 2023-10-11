"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI;
const connect = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URI, {});
        console.log("MongoDB connected Successfully");
    }
    catch (err) {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(1);
    }
};
exports.connect = connect;
exports.default = exports.connect;
