"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataFromAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchDataFromAPI = async (req, res) => {
    try {
        const apiResponse = await axios_1.default.get("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv");
        res.json(apiResponse.data);
    }
    catch (error) {
        console.error("Error fetching data from API:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.fetchDataFromAPI = fetchDataFromAPI;
