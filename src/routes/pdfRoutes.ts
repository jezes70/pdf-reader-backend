import express from "express";
import { generatePDF } from "../controllers/pdfController";

const router = express.Router();

router.post("/generate-pdf", generatePDF);

export default router;
