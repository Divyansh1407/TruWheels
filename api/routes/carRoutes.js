const express = require("express");
const router = express.Router();

const { getBrands } = require("../controllers/carController");

router.get("/brands", getBrands);

module.exports = router;