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

    document.getElementById("inspection-score").textContent =
        reportData.score;

    document.getElementById("score-status").textContent =
        reportData.verdict;
    
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
                value:parseFloat(reportData.score)
            }]
        }]
    });
    
});