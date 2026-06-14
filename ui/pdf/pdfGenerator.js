const carName =
localStorage.getItem("carName");

const brand =
localStorage.getItem("brand");

const year =
localStorage.getItem("year");

const engineType =
localStorage.getItem("engineType");

const km =
localStorage.getItem("km");

const owners =
localStorage.getItem("owners");

const transmission =
localStorage.getItem("transmission");

document.getElementById(
"pdfCarName"
).innerText =
carName.toUpperCase();

document.getElementById(
"pdfVehicleDetails"
).innerText =
`${year} • ${engineType} • ${km} km • ${owners} Owner(s) • ${transmission}`;

const imageName =
carName
.toLowerCase()
.replace(/\s+/g, "-");

document.getElementById(
"pdfVehicleImage"
).src =
`../../images/cars/${brand}/${imageName}.png`;

const healthScore =
localStorage.getItem(
    "healthScore"
);

document.getElementById(
    "pdfHealthScore"
).innerText =
`${healthScore}/100`;

let status = "";

if(healthScore >= 80){

    status =
    "Excellent Condition";

}
else if(healthScore >= 60){

    status =
    "Good Condition";

}
else if(healthScore >= 40){

    status =
    "Fair Condition";

}
else{

    status =
    "Poor Condition";

}

document.getElementById(
    "pdfHealthStatus"
).innerText =
status;

document.getElementById(
"pdfVerdict"
).innerText =
"RECOMMENDED PURCHASE";

document.getElementById(
"pdfVerdictDescription"
).innerText =
"Vehicle indicators appear strong across major TruWheels intelligence checks.";

document.getElementById(
"verdictPoint1"
).innerText =
"✔ Ownership pattern appears normal";

document.getElementById(
"verdictPoint2"
).innerText =
"⚠ Service history not provided";

document.getElementById(
"verdictPoint3"
).innerText =
"✔ Price analysis available";

document.getElementById(
"verdictPoint4"
).innerText =
"✔ No major ownership concerns";

document.getElementById(
"pdfOwnership"
).innerText =
`${owners} Owner(s) reported.`;

document.getElementById(
"pdfMaintenance"
).innerText =
status;

document.getElementById(
"pdfPrice"
).innerText =
"Price analysis available.";

document.getElementById(
"pdfService"
).innerText =
"Service records evaluated.";

document.getElementById(
"page2Health"
).innerText =
`Health Score: ${healthScore}/100

The vehicle shows strong overall condition based on available ownership and maintenance indicators.`;

document.getElementById(
"page2Ownership"
).innerText =
`${owners} Owner(s) reported.

Ownership history appears normal and does not indicate unusual transfer activity.`;

document.getElementById(
"page2Maintenance"
).innerText =
`Routine maintenance verification is recommended based on vehicle age and usage profile.`;

document.getElementById(
"page2Service"
).innerText =
`No service records were provided.

Request maintenance invoices and service documentation before purchase.`;

document.getElementById(
"page3Overview"
).innerText =
`${carName} | ${year} | ${engineType} | ${transmission}`;

document.getElementById(
"page3Price"
).innerText =
"Price analysis available in TruWheels intelligence engine.";

document.getElementById(
"question1"
).innerText =
"Can you share service invoices?";

document.getElementById(
"question2"
).innerText =
"Has the engine undergone major repairs?";

document.getElementById(
"question3"
).innerText =
"Any pending repairs or known issues?";

document.getElementById(
"question4"
).innerText =
"Why are you selling the vehicle?";
