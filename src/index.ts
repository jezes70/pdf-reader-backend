import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes";
import connect from "./config/database";
import pdfRoutes from "./routes/pdfRoutes";

dotenv.config();

connect().then(() => {
  console.log("MongoDB connected Successfully");
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);
app.use("/pdf", pdfRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
