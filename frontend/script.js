import { supabase }
from "./supabase/supabaseClient.js";

const brandDropdown =
document.getElementById("carBrand");

const modelDropdown =
document.getElementById("carModel");

let allCars = [];

async function wakeBackend(){

    try{

        await fetch(
            "https://truwheels-api.onrender.com/"
        );

        console.log(
            "Backend Awake"
        );

    }

    catch(error){

        console.error(
            "Backend Wake Failed:",
            error
        );

    }

}

async function loadCars(){

    try{

        const response =
        await fetch(
            "https://truwheels-api.onrender.com/cars"
        );

        allCars =
        await response.json();

        console.log(
            "Cars Loaded:",
            allCars.length
        );

    }

    catch(error){

        console.error(
            "Failed to load cars:",
            error
        );

    }

}

brandDropdown.addEventListener("change", function () {

    const selectedBrand =
    brandDropdown.value;

    modelDropdown.innerHTML =
    '<option value="">Select Model</option>';

    if(!selectedBrand) return;

    const models =
    allCars
        .filter(car =>
            car.brand === selectedBrand
        )
        .map(car =>
            car.model
        );

    models.forEach(model => {

        const option =
        document.createElement("option");

        option.value = model;

        option.textContent = model;

        modelDropdown.appendChild(option);

    });

});

Promise.all([

    wakeBackend(),

    loadCars()

]);

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

  const response = await fetch("https://truwheels-api.onrender.com/analyze", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({

      brand,
      model,
      year,
      km,
      owners,
      transmission,
      engineType,
      askingPrice: price,

      serviceHistory:
        document.getElementById("serviceHistory").value,

      serviceType:
        document.getElementById("serviceType").value,

      accidentHistory:
        document.getElementById("accidentHistory").value,

      maintenanceDiscipline:
        document.getElementById("maintenanceDiscipline").value

    })

  });

    if (!response.ok) {
      alert("Failed to analyze vehicle.");
      return;
    }

  const result = await response.json();

    if(result.error){

      alert(result.error);
      return;

    }

  console.log(result);
  
  const health = result.health;
  const priceResult = result.price;
  const serviceResult = result.service;
  const questionResult = result.questions;

  if (priceResult) {

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
  else {

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
      "Pricing data is currently unavailable."
    );

    localStorage.setItem(
      "priceRecommendation",
      "Market intelligence unavailable."
    );

  }

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
      health.score.toFixed(1)
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
      health.expectedOwners
    );

    localStorage.setItem(
      "vehicleAge",
      health.age
    );

    localStorage.setItem(
      "serviceAdvisories",
      JSON.stringify(
        serviceResult ? serviceResult.advisories : []
      )
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
      document.getElementById("serviceHistory").value ||
      document.getElementById("serviceType").value ||
      document.getElementById("accidentHistory").value ||
      document.getElementById("maintenanceDiscipline").value
        ? "true"
        : "false"
    );

    localStorage.setItem(
      "maintenanceIssues",
      JSON.stringify(
        health.maintenanceIssues
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

    healthScore: health.score,

    risk: health.risk

});
    
  window.location.href = "ui/report.html"; 

}
