"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const generatePDF = async (req, res) => {
    try {
        const browser = await puppeteer_1.default.launch();
        const page = await browser.newPage();
        // Customize your PDF design and content using HTML/CSS
        const htmlContent = `<html><body><h1>Custom PDF Content</h1></body></html>`;
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: "A4" });
        await browser.close();
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=custom-pdf.pdf");
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.generatePDF = generatePDF;
