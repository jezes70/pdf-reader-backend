// backend/src/controllers/pdfController.ts
import { Request, Response } from "express";
import puppeteer from "puppeteer";

export const generatePDF = async (req: Request, res: Response) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Customize your PDF design and content using HTML/CSS
    const htmlContent = `<html><body><h1>Custom PDF Content</h1></body></html>`;

    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=custom-pdf.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
