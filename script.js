import { analyzeServiceIntelligence }
from "./intelligence/serviceIntelligence.js";

import { analyzePriceIntelligence }
from "./intelligence/priceIntelligence.js";


const brandDropdown =
document.getElementById("carBrand");

const modelDropdown =
document.getElementById("carModel");

brandDropdown.addEventListener("change", function () {

  let selectedBrand =
    brandDropdown.value;

  // CLEAR OLD MODELS
  modelDropdown.innerHTML =
    '<option value="">Select Model</option>';

  // GET CARS OF SELECTED BRAND
  let cars =
    carDatabase[selectedBrand].cars;

  // LOOP THROUGH CARS
  for (let car in cars) {

    let option =
      document.createElement("option");

    option.value = car;

    option.textContent = car;

    modelDropdown.appendChild(option);

  }

});


 window.analyzeCar = function() {

  let brand =
    document.getElementById("carBrand").value;

  let model =
    document.getElementById("carModel").value;

  let engineType =
    document.getElementById("engineType").value;

  let transmission =
    document.getElementById("transmission").value; 

  let year =
    Number(document.getElementById("year").value);

  let km =
    Number(document.getElementById("km").value);

  let owners =
    Number(document.getElementById("owners").value);

  let price =
    Number(document.getElementById("price").value);

  // BRAND CHECK
  if (!carDatabase[brand]) {

    alert("Brand not found in database");

    return;
  }

  // MODEL CHECK
  if (!carDatabase[brand].cars[model]) {

    alert("Model not found for this brand");

    return;
  }

  // GET DATABASE DATA
  let brandData =
    carDatabase[brand];

  let carData =
    carDatabase[brand].cars[model];

  // START SCORE
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
  Math.max(1, Math.ceil(age / 5));

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

  // PRICE INTELLIGENCE

  let priceResult = null;
  let yearPriceData = null;

  if(carData.priceData){
    yearPriceData =
    carData.priceData[String(year)];
  }

  if(yearPriceData){

    priceResult =
    analyzePriceIntelligence({
      askingPrice: price,
      marketAvg: yearPriceData.avg,
      marketMin: yearPriceData.min,
      marketMax: yearPriceData.max,
      healthScore: score
    });

    localStorage.setItem(
      "marketPosition",
      priceResult.marketPosition
    );

    localStorage.setItem(
      "priceGapPercent",
      priceResult.priceGapPercent.toFixed(1)
    );

    localStorage.setItem(
      "priceObservation",
      priceResult.observation
    );

    localStorage.setItem(
      "priceRecommendation",
      priceResult.recommendation
    );

  }

  else{

    localStorage.setItem(
      "marketPosition",
      "Market Intelligence Coming Soon"
    );

    localStorage.setItem(
      "priceGapPercent",
      ""
    );

    localStorage.setItem(
      "priceObservation",
      "Pricing data is currently unavailable for this vehicle."
    );

    localStorage.setItem(
      "priceRecommendation",
      "TruWheels will support market analysis for this vehicle in a future database update."
    );

  }

   const serviceResult=analyzeServiceIntelligence({

    serviceHistory:
    document.getElementById("serviceHistory").value,

    serviceType:
    document.getElementById("serviceType").value,

    accidentHistory:
    document.getElementById("accidentHistory").value,

    maintenanceDiscipline:
    document.getElementById("maintenanceDiscipline").value
    });

    const serviceDataProvided =
    document.getElementById("serviceHistory").value ||
    document.getElementById("serviceType").value ||
    document.getElementById("accidentHistory").value ||
    document.getElementById("maintenanceDiscipline").value;

    let advisoryHTML="";

    if(serviceResult.advisories.length===0){

        advisoryHTML=
        `
        <p>
        No optional ownership history was provided for deeper service analysis.
        </p>

        <p>
        Core vehicle evaluation remains unaffected and continues using standard reliability and market intelligence.
        </p>
        `;
    }

    else{

        for(let advisory of serviceResult.advisories){

            advisoryHTML +=
            "<p>⚠ " + advisory + "</p>";
        }
    }

    localStorage.setItem(
      "carName",
      model
    );

    localStorage.setItem(
      "healthScore",
      score.toFixed(1)
    );

    localStorage.setItem(
      "year",
      year
    );

    localStorage.setItem(
      "engineType",
      engineType
    );

    localStorage.setItem(
      "km",
      km
    );

    localStorage.setItem(
      "transmission",
      transmission
    );

    localStorage.setItem(
      "owners",
      owners
    );

    localStorage.setItem(
      "expectedOwners",
      expectedOwners
    );

    localStorage.setItem(
      "vehicleAge",
      age
    );

    localStorage.setItem(
      "serviceAdvisories",
      JSON.stringify(serviceResult.advisories)
    );

    localStorage.setItem(
    "serviceHistory",
    document.getElementById("serviceHistory").value
    );

    localStorage.setItem(
    "serviceType",
    document.getElementById("serviceType").value
    );

    localStorage.setItem(
    "accidentHistory",
    document.getElementById("accidentHistory").value
    );

    localStorage.setItem(
    "maintenanceDiscipline",
    document.getElementById("maintenanceDiscipline").value
    );

    localStorage.setItem(
    "serviceDataProvided",
    serviceDataProvided ? "true" : "false"
    );

    localStorage.setItem(
    "expectedOwners",
    expectedOwners
    );

    localStorage.setItem(
    "vehicleAge",
    age
    );

    localStorage.setItem(
    "maintenanceIssues",
    JSON.stringify(
    maintenanceIssues
    )
    );

    window.location.href = "ui/report.html";

}
