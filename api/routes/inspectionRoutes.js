const express = require("express");
const router = express.Router();

const {
    analyzeInspection
} = require("../controllers/inspectionController");

router.post(
    "/inspection",
    analyzeInspection
);

module.exports = router;