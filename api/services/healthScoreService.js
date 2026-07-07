const calculateHealthScore = ({
  brandData,
  carData,
  year,
  km,
  owners,
  transmission,
  engineType,
  maintenanceGuide
}) => {

let score = 100;

  // BRAND RELIABILITY EFFECT
  score -= (10 - brandData.brandReliability) * 2;

  // CAR RELIABILITY EFFECT
  score -= (10 - carData.reliability) * 2;

  // KM LOGIC
  let currentYear = new Date().getFullYear();

  let age =
  currentYear - year;

  let expectedKm =
  age * 11000 *
  carData.kmTolerance;

  // LOW RUNNING
  if (km < expectedKm - 20000) {

    score += 2;

  }

  // NORMAL RUNNING
  else if (km <= expectedKm + 20000) {

    score += 0;

  }

  // HIGH RUNNING
  else if (km <= expectedKm + 50000) {

    score -= 8;

  }

  // VERY HIGH RUNNING
  else {

    score -= 12;

  }

  // AGE LOGIC

    if (age <= 3) {
      score -= 2;
    }

    else if (age <= 5) {
      score -= 8;
    }

    else if (age <= 8) {
      score -= 15;
    }

    else if (age <= 12) {
      score -= 19;
    }

    else {
      score -= 28.5;
    }

  // OWNERSHIP LOGIC

  let expectedOwners =
  Math.max(1, Math.ceil(age / 6));

  // ownership within expectation
  if (owners <= expectedOwners) {
    score -= 0;
  }

  // slightly higher ownership
  else if (owners === expectedOwners + 1) {
    score -= 4.5;
  }

  // very high ownership
  else {
    score -= 8.5;
  }

  // AUTOMATIC TRANSMISSION LOGIC

  if (transmission === "Automatic") {

  // DSG / DCT
  if (
    carData.automaticType === "DSG" ||
    carData.automaticType === "DCT"
  ) {

    if (age > 7) {
      score -= 6;
    }

    if (km > expectedKm + 30000) {
      score -= 5;
    }

  }

  // CVT
  else if (
    carData.automaticType === "CVT"
  ) {

    if (age > 10) {
      score -= 3;
    }

  }

  // AMT
  else if (
    carData.automaticType === "AMT"
  ) {

    if (age > 10) {
      score -= 2;
    }

  }

  // Torque Converter
  else if (
    carData.automaticType === "Torque Converter"
  ) {

    if (age > 12) {
      score -= 2;
    }
  }

 }
    
// SMART ENGINE LOGIC

   // ENGINE CONFIDENCE
    score -=
    (10 - carData.engineConfidence) * 1;


    // TURBO RISK FOR OLDER CARS
    if (age > 8) {

      score -=
      carData.turboRisk * 0.75;

    }


  // HIGHWAY CONFIDENCE

    if (km > expectedKm + 30000) {

      score -=
      (10 - carData.highwayConfidence);

    }


  // CITY CONFIDENCE FOR OLD DIESELS

    if (
      engineType === "Diesel" &&
      age > 10
    ) {

      score -=
      (10 - carData.cityConfidence);

    }


  // AGING BEHAVIOR

    if (
      carData.agingBehavior ===
      "Built Tough"
    ) {

      score += 1.5;

    }

    else if (
      carData.agingBehavior ===
      "Graceful"
    ) {

      score += 1;

    }

    else if (
      carData.agingBehavior ===
      "Complex"
    ) {

      score -= 3;

    }

    else if (
      carData.agingBehavior ===
      "Sensitive"
    ) {

      score -= 2;

    }



  // MAINTENANCE LOGIC
  if (carData.maintenance === "High") {
    score -= 10;
  }

  // PREVENT NEGATIVE SCORE
  if (score < 0) {
    score = 0;
  }

  let maintenanceIssues = [];

  for (let range of maintenanceGuide) {

  if (km >= range.minKm &&
      km <= range.maxKm) {

    maintenanceIssues =
      range.issues;

    break;
  }
 }

  // RISK LEVEL
  let risk = "";

  if (score >= 80) {
    risk = "Low Risk";
  }

  else if (score >= 60) {
    risk = "Medium Risk";
  }

  else if (score >= 40) {
    risk = "High Risk";
  }

  else {
    risk = "Avoid";
  }

  return {
    score,
    risk,
    age,
    expectedOwners,
    maintenanceIssues
  };
};

module.exports = {
  calculateHealthScore
};  