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