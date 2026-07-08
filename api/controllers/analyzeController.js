const analyzeService = require("../services/analyzeService");

const analyzeVehicle = async (req, res) => {

  const vehicleData = req.body;

  const result = await analyzeService.analyzeVehicle(vehicleData);

  res.json(result);

};

module.exports = {
  analyzeVehicle
};