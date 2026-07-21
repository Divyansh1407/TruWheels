const container = document.getElementById(
    "inspectionContainer"
);

inspectionChecklist.forEach(section => {

    const category = document.createElement("section");

    category.className = "inspection-section";

    let checkpointHTML = "";

    section.checkpoints.forEach(point => {

        checkpointHTML += `

        <div class="checkpoint-card">

            <label class="checkpoint-label">

                <input
                type="checkbox"
                class="checkpoint-checkbox">

                <span class="custom-checkbox"></span>

                <span class="checkpoint-text">
                ${point.title}
                </span>

            </label>

            <div class="severity-container">

                <select class="severity-select">

                <option value="">
                Select Severity
                </option>

                ${point.severityOptions.map(option => `

                <option value="${option}">
                ${option}
                </option>

                `).join("")}

                </select>

            </div>

        </div>

        `;
    });

    category.innerHTML = `

        <div class="section-header">

            <div class="section-info">

                <h2>
                    ${section.icon} ${section.category}
                </h2>

            </div>

            <span>
                ${section.checkpoints.length} Checkpoints
            </span>

        </div>

        <div class="section-content active">

            ${checkpointHTML}

        </div>
    `;

    container.appendChild(category);

});

document
.querySelectorAll(".checkpoint-checkbox")
.forEach(checkbox => {

    checkbox.addEventListener("change", () => {

        const severityContainer =

        checkbox
        .closest(".checkpoint-card")
        .querySelector(".severity-container");


        if(checkbox.checked){

            severityContainer.classList.add(
                "show-severity"
            );
        }

        else{

            severityContainer.classList.remove(
                "show-severity"
            );

            severityContainer.querySelector(
                ".severity-select"
            ).selectedIndex = 0;
        }

    });

});

document
.getElementById("generateInspectionBtn")
.addEventListener("click", async () => {

    const totalCheckpoints =
        document.querySelectorAll(
            ".checkpoint-checkbox"
        ).length;

    const selectedIssues = [];
    let totalIssues = 0;
    let incompleteSelection = false;

    document
    .querySelectorAll(".checkpoint-card")
    .forEach(card => {

        const checkbox =
        card.querySelector(".checkpoint-checkbox");

        const severity =
        card.querySelector(".severity-select").value;

        // User checked issue but forgot severity

        if(checkbox.checked && severity === ""){

            incompleteSelection = true;

            card.style.border =
            "1px solid #ef4444";

        }

        if(severity !== ""){
            card.style.border =
            "1px solid rgba(255,255,255,0.08)";
        }

        // User selected severity properly

        if(checkbox.checked && severity !== ""){

            const issueTitle = card
                .querySelector(".checkpoint-text")
                .textContent
                .trim();

            selectedIssues.push({

                issue: issueTitle,
                severity: severity

            });
            totalIssues++;

        }

    });

    if(incompleteSelection){

        alert(
            "Please select severity for all checked issues before generating the report."
        );

        return;
    }
   

    const response = await fetch(
    "https://truwheels-api.onrender.com/inspection",
    {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            selectedIssues
        })

    });

    const inspectionResult =
    await response.json();

    
    const inspectionReportData = {

        inspectionDate:
        new Date().toLocaleDateString(
            "en-GB",
            {
                day:"2-digit",
                month:"short",
                year:"numeric"
            }
        ),

        totalIssues,
        totalCheckpoints,

        score: inspectionResult.score,
        verdict: inspectionResult.verdict,
        recommendation:
        inspectionResult.recommendation,

        selectedIssues
        
    };

    localStorage.setItem(
        "inspectionReportData",
        JSON.stringify(inspectionReportData)
    );

    window.location.href =
    "physicalInspectionResult.html";
});