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

const currentDate =
new Date();

const formattedDate =
currentDate.toLocaleDateString(
"en-IN",
{
    day: "2-digit",
    month: "short",
    year: "numeric"
}
);

document.querySelectorAll(
"#generatedDate"
).forEach(date => {

    date.innerText =
    formattedDate;

});

const reportId =
`TW-${
currentDate.getFullYear()
}${
String(currentDate.getMonth() + 1).padStart(2, "0")
}${
String(currentDate.getDate()).padStart(2, "0")
}-001`;

document.querySelectorAll(
"#reportId"
).forEach(id => {

    id.innerText =
    reportId;

});


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
localStorage.getItem(
"finalVerdictTitle"
);

document.getElementById(
"pdfVerdictDescription"
).innerText =
localStorage.getItem(
"finalVerdictDescription"
);

const findings =
JSON.parse(
localStorage.getItem(
"finalVerdictFindings"
) || "[]"
);

document.getElementById(
"verdictPoint1"
).innerText =
findings[0] || "";

document.getElementById(
"verdictPoint2"
).innerText =
findings[1] || "";

document.getElementById(
"verdictPoint3"
).innerText =
findings[2] || "";

document.getElementById(
"verdictPoint4"
).innerText =
findings[3] || "";

document.getElementById(
"pdfPrice"
).innerText =
localStorage.getItem(
"priceObservation"
);

const serviceProvided =
localStorage.getItem(
"serviceDataProvided"
);


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
"page2Price"
).innerText =
localStorage.getItem(
"priceRecommendation"
);

const questions =
JSON.parse(
localStorage.getItem(
"highPriorityQuestions"
) || "[]"
);

document.getElementById(
"question1"
).innerText =
questions[0] || "";

document.getElementById(
"question2"
).innerText =
questions[1] || "";

document.getElementById(
"question3"
).innerText =
questions[2] || "";

document.getElementById(
"question4"
).innerText =
questions[3] || "";