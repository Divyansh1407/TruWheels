const carService = require("./carService");
const healthScoreService = require("./healthScoreService");
const priceService = require("./priceService");
const serviceIntelligenceService = require("./serviceIntelligenceService");

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
  
    
    const yearPriceData =
    carData.priceData[String(year)];

    let price = null;

    if (yearPriceData) {

        price =
            priceService.calculatePriceIntelligence({
            askingPrice: vehicleData.askingPrice,
            marketAvg: yearPriceData.avg,
            marketMin: yearPriceData.min,
            marketMax: yearPriceData.max,
            healthScore: health.score

        });

    }

    const service =
    serviceIntelligenceService.analyzeServiceIntelligence({

        serviceHistory: vehicleData.serviceHistory,
        serviceType: vehicleData.serviceType,
        accidentHistory: vehicleData.accidentHistory,
        maintenanceDiscipline: vehicleData.maintenanceDiscipline

    });

  return {
    health,
    price,
    service
  };
};


module.exports = {
  analyzeVehicle
};