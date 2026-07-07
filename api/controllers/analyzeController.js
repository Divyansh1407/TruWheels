const analyzeService = require("../services/analyzeService");

const analyzeVehicle = (req, res) => {
  const vehicleData = req.body;

  const result = analyzeService.analyzeVehicle(vehicleData);

  res.json(result);
};

module.exports = {
  analyzeVehicle
};