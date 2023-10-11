"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const apiRoutes_1 = __importDefault(require("./routes/apiRoutes"));
const database_1 = __importDefault(require("./config/database"));
const pdfRoutes_1 = __importDefault(require("./routes/pdfRoutes"));
dotenv_1.default.config();
(0, database_1.default)().then(() => {
    console.log("MongoDB connected Successfully");
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", apiRoutes_1.default);
app.use("/pdf", pdfRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
