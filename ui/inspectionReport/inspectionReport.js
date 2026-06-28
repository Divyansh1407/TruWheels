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
.addEventListener("click", () => {

    const totalIssues =
        document.querySelectorAll(
            ".checkpoint-checkbox:checked"
        ).length;

    const totalCheckpoints =
        document.querySelectorAll(
            ".checkpoint-checkbox"
        ).length;

    const selectedIssues = [];

    document
    .querySelectorAll(".checkpoint-checkbox:checked")
    .forEach(checkbox => {

        const card = checkbox.closest(".checkpoint-card");

        const issueTitle = card
            .querySelector(".checkpoint-text")
            .textContent
            .trim();

        const severity = card
            .querySelector(".severity-select")
            .value;

        selectedIssues.push({
            issue: issueTitle,
            severity: severity
        });

    });
   

    const inspectionResult =
    calculateInspectionScore(selectedIssues);

    
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
        inspectionResult.recommendation
        
    };

    localStorage.setItem(
        "inspectionReportData",
        JSON.stringify(inspectionReportData)
    );

    window.location.href =
    "physicalInspectionResult.html";
});