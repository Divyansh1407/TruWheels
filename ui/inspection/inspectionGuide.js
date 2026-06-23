const guideContainer =
document.querySelector(".guide-container");

inspectionGuideData.forEach((section,index) => {

    let checkpointHTML = "";

    section.checkpoints.forEach(point => {

        checkpointHTML += `

           <div class="inspection-card">

                <div class="point-header">
                    <h3>${point.title}</h3>
                    <span class="toggle-icon">+</span>
                </div>

                <div class="point-content">

                   <h4 class="content-heading">
                        WHAT TO INSPECT?
                    </h4>

                    <p class="content-text">
                        ${point.inspect}
                    </p>

                    <h4 class="content-heading">
                        WHY IT MATTERS?
                    </h4>

                    <p class="content-text">
                        ${point.importance}
                    </p>

                    <h4 class="risk-heading">
                        Normal vs Red Flags
                    </h4>

                    <div class="normal-point">
                        <strong>✓ Normal:</strong><br>
                        ${point.normal}
                    </div>

                    <div class="redflag-point">
                        <strong>🚨 Red Flag:</strong><br>
                        ${point.redFlag}
                    </div>

                </div>

            </div>

        `;
    });

   guideContainer.innerHTML += `

        <section class="inspection-section">

            <div class="section-header">

                <h2>
                    ${section.icon}
                    ${section.category}
                </h2>

                <div class="section-info">

                    <span>
                        ${section.checkpoints.length}
                        Checkpoints
                    </span>

                    <span class="section-toggle">
                        ${index === 0 ? "−" : "+"}
                    </span>

                </div>

            </div>

            <div class="section-content
             ${index === 0 ? "active" : ""}">

                ${checkpointHTML}

            </div>

        </section>

    `;
});

document.addEventListener("click", function(e){

    const header = e.target.closest(".point-header");
    if(!header) return;
    const card = header.parentElement;
    card.classList.toggle("active");

});

document.addEventListener("click", function(e){

    const sectionHeader =
    e.target.closest(".section-header");

    if(!sectionHeader) return;

    const content =
    sectionHeader.nextElementSibling;

    const toggle =
    sectionHeader.querySelector(".section-toggle");

    content.classList.toggle("active");

    toggle.textContent =
        content.classList.contains("active")
        ? "−"
        : "+";

});