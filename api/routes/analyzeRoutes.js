const express = require("express");
const router = express.Router();

const { analyzeVehicle } = require("../controllers/analyzeController");

router.post("/analyze", analyzeVehicle);

module.exports = router;