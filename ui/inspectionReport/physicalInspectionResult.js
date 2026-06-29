document.addEventListener("DOMContentLoaded", () => {

    const reportData = JSON.parse(
        localStorage.getItem("inspectionReportData")
    );

    if(!reportData) return;

    document.getElementById("inspectionDate").textContent =
        reportData.inspectionDate;

    document.getElementById("totalIssues").textContent =
        `${reportData.totalIssues} Issues Found`;

    document.getElementById("totalCheckpoints").textContent =
        `${reportData.totalCheckpoints} Checkpoints`;

    const scoreElement =
    document.getElementById("inspection-score");

    const finalScore =
    parseFloat(reportData.score);

    let currentScore = 0;

    const interval =
    setInterval(() => {

        currentScore += 1;

        if(currentScore >= finalScore){

            currentScore = finalScore;
            clearInterval(interval);
        }

        scoreElement.textContent =
        currentScore.toFixed(1);

    },20);

    let scoreStatus = "";

    if(reportData.score >= 85){
        scoreStatus = "Excellent Condition";
    }

    else if(reportData.score >= 70){
        scoreStatus = "Good Condition";
    }

    else if(reportData.score >= 50){
        scoreStatus = "Needs Attention";
    }

    else{
        scoreStatus = "Poor Condition";
    }

    document.getElementById("score-status").textContent =
    scoreStatus;
    
    document.getElementById("finalVerdict").textContent =
    reportData.verdict;

    const verdictCard =
    document.querySelector(".verdict-card");

    const verdictText =
    document.getElementById("finalVerdict");

    if(reportData.verdict ===
    "RECOMMENDED PURCHASE"){

    verdictCard.classList.add(
        "verdict-positive"
    );

    verdictText.classList.add(
        "text-positive"
    );
    }

    else if(reportData.verdict ===
        "BUY AFTER INSPECTION"){

        verdictCard.classList.add(
            "verdict-warning"
        );

        verdictText.classList.add(
            "text-warning"
        );
    }

    else if(reportData.verdict ===
        "CAUTION ADVISED"){

        verdictCard.classList.add(
            "verdict-caution"
        );

        verdictText.classList.add(
            "text-caution"
        );
    }

    else{

        verdictCard.classList.add(
            "verdict-danger"
        );

        verdictText.classList.add(
            "text-danger"
        );
    }

    document.getElementById("finalRecommendation").textContent =
        reportData.recommendation;

    
    const gaugeContainer =
    document.getElementById("inspectionGauge");

    const gaugeChart =
    echarts.init(gaugeContainer);

    gaugeChart.setOption({

        series:[{

            type:"gauge",

            min:0,
            max:100,

            startAngle:210,
            endAngle:-30,

            radius:"95%",

            axisLine:{
                lineStyle:{
                    width:20,
                    color:[
                        [0.50,"#ef4444"],
                        [0.72,"#facc15"],
                        [1,"#22c55e"]
                    ]
                }
            },

            pointer:{
                length:"65%",
                width:6
            },

            anchor:{
                show:true,
                size:18
            },

            splitLine:{
                distance:1,
                length:7,
                lineStyle:{
                    color:"#ffffff"
                }
            },

            axisLabel:{
                show:false
            },

            detail:{
                show:false
            },

            data:[{
                value:0
            }]

        }]

    });

    setTimeout(() => {

        gaugeChart.setOption({

            series:[{
                data:[{
                    value: parseFloat(reportData.score)
                }]
            }]

        });

    }, 300);

    const findingsContainer =
    document.getElementById("dynamicFindings");

    let findingsHTML = "";

    const selectedIssues =
    reportData.selectedIssues || [];


    // Exterior

    if(selectedIssues.some(item =>
        item.issue.toLowerCase().includes("paint") ||
        item.issue.toLowerCase().includes("body") ||
        item.issue.toLowerCase().includes("rust") ||
        item.issue.toLowerCase().includes("dent")
    )){

        findingsHTML +=
        `<p>⚠️ Exterior inconsistencies detected.</p>`;
    }

    else{

        findingsHTML +=
        `<p>✅ Exterior condition appears satisfactory.</p>`;
    }


    // Engine

    if(selectedIssues.some(item =>
        item.issue.toLowerCase().includes("oil") ||
        item.issue.toLowerCase().includes("coolant") ||
        item.issue.toLowerCase().includes("vibration") ||
        item.issue.toLowerCase().includes("smoke")
    )){

        findingsHTML +=
        `<p>⚠️ Engine bay concerns require verification.</p>`;
    }

    else{

        findingsHTML +=
        `<p>✅ No major engine concerns observed.</p>`;
    }


    // Suspension

    if(selectedIssues.some(item =>
        item.issue.toLowerCase().includes("tyre") ||
        item.issue.toLowerCase().includes("suspension") ||
        item.issue.toLowerCase().includes("steering")
    )){

        findingsHTML +=
        `<p>⚠️ Tyre and suspension inspection recommended.</p>`;
    }

    else{

        findingsHTML +=
        `<p>✅ Tyres and suspension appear healthy.</p>`;
    }


    // Test Drive

    if(selectedIssues.some(item =>
        item.issue.toLowerCase().includes("clutch") ||
        item.issue.toLowerCase().includes("gear") ||
        item.issue.toLowerCase().includes("brake") ||
        item.issue.toLowerCase().includes("noise")
    )){

        findingsHTML +=
        `<p>⚠️ Test drive verification recommended.</p>`;
    }

    else{

        findingsHTML +=
        `<p>✅ Test drive observations appear satisfactory.</p>`;
    }

    findingsContainer.innerHTML =
    findingsHTML;

    const modal =
    document.querySelector(".modal");

    const closeModalBtn =
    document.querySelector(".close-modal");

    const modalTitle =
    document.getElementById("modal-title");

    const modalBody =
    document.getElementById("modal-body");


    const popupConfig = {

        exterior: {
            title: "Exterior Inspection",
            keywords: [
                "paint",
                "panel",
                "rust",
                "dent",
                "headlight",
                "taillight"
            ]
        },

        engine: {
            title: "Engine Bay Inspection",
            keywords: [
                "oil",
                "coolant",
                "vibration",
                "smoke"
            ]
        },

        suspension: {
            title: "Tyres & Suspension",
            keywords: [
                "tyre",
                "suspension",
                "steering"
            ]
        },

        interior: {
            title: "Interior Inspection",
            keywords: [
                "dashboard",
                "warning",
                "ac",
                "electrical"
            ]
        },

        testDrive: {
            title: "Test Drive Inspection",
            keywords: [
                "clutch",
                "gear",
                "brake",
                "noise"
            ]
        }

    };


    document
    .querySelectorAll(".finding-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const section =
            card.dataset.section;

            const config =
            popupConfig[section];

            modal.classList.remove("hidden");

            modalTitle.textContent =
            config.title;

            const relatedIssues =
            reportData.selectedIssues.filter(issue =>

                config.keywords.some(keyword =>

                    issue.issue
                    .toLowerCase()
                    .includes(keyword)
                )
            );

            const confidence =
            relatedIssues.length === 0
            ? "High"
            : relatedIssues.length <= 2
            ? "Medium"
            : "Low";

            let confidenceClass = "";

            if(confidence === "High"){
                confidenceClass = "confidence-high";
            }

            else if(confidence === "Medium"){
                confidenceClass = "confidence-medium";
            }

            else{
                confidenceClass = "confidence-low";
            }

            let issueHTML = "";

            if(relatedIssues.length > 0){

                relatedIssues.slice(0,3)
                .forEach(item => {

                    issueHTML += `
                        <div class="inspection-pill">
                            ${item.issue}
                        </div>
                    `;

                });

            }

            else{

                issueHTML =
                `<div class="inspection-pill">
                    No concerns observed
                </div>`;
            }

            modalBody.innerHTML = `

                <div class="popup-metrics">

                    <div class="popup-card">
                        <span>CHECKPOINTS EVALUATED</span>
                        <h3>${config.keywords.length}</h3>
                    </div>

                    <div class="popup-card">
                        <span>ISSUES DETECTED</span>
                        <h3>${relatedIssues.length}</h3>
                    </div>

                    <div class="popup-card ${confidenceClass}">
                        <span>CONFIDENCE LEVEL</span>
                        <h3>${confidence}</h3>
                    </div>

                </div>

                <div class="popup-section">

                    <h3>Critical Inspection Areas</h3>

                    <div class="popup-pill-container">
                        ${issueHTML}
                    </div>

                </div>

                <div class="popup-assessment">

                    <h3>TruWheels Assessment</h3>

                    <p>

                    ${
                        relatedIssues.length === 0

                        ?

                        "No major concerns were observed during inspection. This area appears satisfactory based on the available observations."

                        :

                        `Multiple observations were recorded during inspection. Additional verification is recommended before final purchase.`
                    }

                    </p>

                </div>

            `;

        });

    });


    closeModalBtn.addEventListener(
        "click",
        () => {

            modal.classList.add(
                "hidden"
            );

        }
    );

});