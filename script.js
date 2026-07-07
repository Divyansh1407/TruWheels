import { supabase }
from "./supabase/supabaseClient.js";

import { analyzeServiceIntelligence }
from "./intelligence/serviceIntelligence.js";

import { analyzePriceIntelligence }
from "./intelligence/priceIntelligence.js";

import { generateQuestions }
from "./intelligence/questionIntelligence.js";


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

async function saveReport(reportData){

    console.log("saveReport called");
    console.log(reportData);

    try{

        const {
            data: { session }
        } = await supabase.auth.getSession();

        const user = session?.user;

        if(!user){

            console.error("USER IS NULL");
            return;
        }

        console.log("Logged in user:", user);

        const { error } = await supabase
          .from("Reports")
          .insert([{

              user_id: user.id,
              user_email: user.email,

              brand: reportData.brand,
              model: reportData.model,
              year: reportData.year,
              km: reportData.km,
              owners: reportData.owners,

              transmission: reportData.transmission,
              engine_type: reportData.engineType,

              health_score: reportData.healthScore,
              risk: reportData.risk,

              asking_price: Number(
                  document.getElementById("price").value
              ),

              market_position:
                  localStorage.getItem("marketPosition"),

              price_gap_percent:
                  Number(
                      localStorage.getItem("priceGapPercent")
                  )

          }]);

        if(error){

            console.error("SUPABASE ERROR:", error);

        } else {

            console.log("Report Saved Successfully");

        }

    }

    catch(error){

        console.error("SAVE REPORT ERROR:", error);

    }

}

 window.analyzeCar = async function() {

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

    let ownershipConfidence = "High";

    if(owners === expectedOwners + 1){
      ownershipConfidence = "Medium";
    }
    else if(owners > expectedOwners + 1){
      ownershipConfidence = "Low";
    }

    let maintenanceStage = "";

    if(km <= 30000){
      maintenanceStage = "Early Ownership Zone";
    }
    else if(km <= 60000){
      maintenanceStage = "Active Wear Zone";
    }
    else if(km <= 90000){
      maintenanceStage = "Mid-Life Ownership Zone";
    }
    else if(km <= 120000){
      maintenanceStage = "Advanced Wear Zone";
    }
    else{
      maintenanceStage = "Major Maintenance Zone";
    }

    const questionResult =
    generateQuestions({

      serviceDataProvided:
      serviceDataProvided ? "true" : "false",

      ownershipConfidence,

      maintenanceStage,

      marketPosition:
      priceResult
      ? priceResult.marketPosition
      : "Market Intelligence Coming Soon",

      accidentHistory:
      document.getElementById("accidentHistory").value

    });

    localStorage.setItem(
      "highPriorityQuestions",
      JSON.stringify(
        questionResult.highPriority
      )
    );

    localStorage.setItem(
      "usefulQuestions",
      JSON.stringify(
        questionResult.useful
      )
    );

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
      "brand",
      brand
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

await saveReport({

    brand,
    model,
    year,
    km,
    owners,
    transmission,
    engineType,

    healthScore: score.toFixed(1),

    risk

});
    
  window.location.href = "ui/report.html"; 

}
