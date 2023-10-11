// backend/src/controllers/apiController.ts
import { Request, Response } from "express";
import axios from "axios";

export const fetchDataFromAPI = async (req: Request, res: Response) => {
  try {
    const apiResponse = await axios.get(
      "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"
    );

    res.json(apiResponse.data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
