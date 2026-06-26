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

                <label>

                    <input type="checkbox">

                    ${point}

                </label>

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