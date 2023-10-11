import express from "express";
import { fetchDataFromAPI } from "../controllers/apiController";

const router = express.Router();

router.get("/get-data", fetchDataFromAPI);

export default router;
