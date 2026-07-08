const carService = require("./carService");
const healthScoreService = require("./healthScoreService");
const priceService = require("./priceService");
const serviceIntelligenceService = require("./serviceIntelligenceService");
const questionService = require("./questionService");

const maintenanceGuide = require("../data/maintenanceGuide");

const analyzeVehicle = async (vehicleData) => {
  const {
    brand,
    model,
    year,
    km,
    owners,
    transmission,
    engineType
  } = vehicleData;

  const vehicle = await carService.getVehicle(
      brand,
      model
  );

  if (!vehicle) {
      return {
          error: "Car not found"
      };
  }

  const { brandData, carData } = vehicle;

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

    const serviceDataProvided =
    vehicleData.serviceHistory ||
    vehicleData.serviceType ||
    vehicleData.accidentHistory ||
    vehicleData.maintenanceDiscipline;


    let maintenanceStage = "";

    if (km <= 30000) {
    maintenanceStage = "Early Ownership Zone";
    }

    else if (km <= 60000) {
    maintenanceStage = "Active Wear Zone";
    }

    else if (km <= 90000) {
    maintenanceStage = "Mid-Life Ownership Zone";
    }

    else if (km <= 120000) {
    maintenanceStage = "Advanced Wear Zone";
    }

    else {
    maintenanceStage = "Major Maintenance Zone";
    }

    const questions =
    questionService.generateQuestions({

        serviceDataProvided:
        serviceDataProvided ? "true" : "false",

        ownershipConfidence: health.ownershipConfidence,

        maintenanceStage,

        marketPosition:
        price
        ? price.marketPosition
        : "Market Intelligence Coming Soon",

        accidentHistory:
        vehicleData.accidentHistory

    });


  return {
    health,
    price,
    service,
    questions
  };
};


module.exports = {
  analyzeVehicle
};