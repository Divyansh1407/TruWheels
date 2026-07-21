const express = require("express");
const router = express.Router();

const {
    getBrands,
    getModels,
    getCar,
    getAllCars
} = require("../controllers/carController");

router.get("/brands", getBrands);
router.get("/brands/:brand/models", getModels);
router.get("/cars", getAllCars);
router.get("/cars/:brand/:model", getCar);
module.exports = router;