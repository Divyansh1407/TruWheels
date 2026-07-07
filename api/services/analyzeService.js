const carService = require("./carService");
const healthScoreService = require("./healthScoreService");

const carDatabase = require("../../data/carDatabase");
const maintenanceGuide = require("../../data/maintenanceGuide");

const analyzeVehicle = (vehicleData) => {

  const {
    brand,
    model,
    year,
    km,
    owners,
    transmission,
    engineType
  } = vehicleData;

  const carData = carService.getCar(
    brand,
    model
 );

  if (!carData) {
    return {
      error: "Car not found"
    };
  }

  const brandData = carDatabase[brand];

  const health =
    healthScoreService.calculateHealthScore({
      brandData,
      carData,
      year,
      km,
      owners,
      transmission,
      engineType,
      maintenanceGuide
    });

  return health;
};


module.exports = {
  analyzeVehicle
};