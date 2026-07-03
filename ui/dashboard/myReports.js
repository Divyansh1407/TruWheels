import { supabase }
from "../../supabase/supabaseClient.js";

const reportsContainer =
document.getElementById("reportsContainer");

const totalReports =
document.getElementById("totalReports");

const bestScore =
document.getElementById("bestScore");

const recentReport =
document.getElementById("recentReport");

const searchInput =
document.getElementById("searchInput");

let allReports = [];

async function loadReports() {

    const { data, error } = await supabase
        .from("Reports")
        .select("*")
        .order("created_at", {
            ascending: false
        });

    if (error) {

        console.log(error);
        return;
    }
    allReports = data;

    // ================= STATS =================

    totalReports.textContent =
        data.length;

    if (data.length > 0) {

        let highestScore =
            Math.max(
                ...data.map(
                    report => report.health_score
                )
            );

        bestScore.textContent =
            highestScore + "/100";

        recentReport.textContent =
            `${data[0].brand} ${data[0].model}`;
    }

    else {

        recentReport.textContent = "--";
    }
    displayReports(data);


}

function displayReports(reports){

    reportsContainer.innerHTML = "";

    if(reports.length === 0){

        reportsContainer.innerHTML = `

            <div class="report-card">

                <h2>
                    No Reports Found
                </h2>

                <p>
                    No matching reports were found.
                </p>

            </div>

        `;

        return;
    }

    reports.forEach(report => {

        reportsContainer.innerHTML += `

            <div class="report-card">

                <div class="report-top">

                    <div class="car-name">
                        ${report.brand}
                        ${report.model}
                    </div>

                    <div class="health-score">
                        ${report.health_score}/100
                    </div>

                </div>

                <div class="report-details">

                    <div class="detail-box">

                        <div class="detail-label">
                            Year
                        </div>

                        <div class="detail-value">
                            ${report.year}
                        </div>

                    </div>

                    <div class="detail-box">

                        <div class="detail-label">
                            KM Driven
                        </div>

                        <div class="detail-value">
                            ${report.km}
                        </div>

                    </div>

                    <div class="detail-box">

                        <div class="detail-label">
                            Risk Level
                        </div>

                        <div class="detail-value">
                            ${report.risk}
                        </div>

                    </div>

                    <div class="detail-box">

                        <div class="detail-label">
                            Market Position
                        </div>

                        <div class="detail-value">
                            ${report.market_position}
                        </div>

                    </div>

                    <div class="detail-box">

                        <div class="detail-label">
                            Price Gap
                        </div>

                        <div class="detail-value">
                            ${
                                report.price_gap_percent > 0
                                ? `+${report.price_gap_percent}%`
                                : `${report.price_gap_percent}%`
                            }
                        </div>

                    </div>

                </div>

                <div class="report-actions">

                    <button
                    class="action-btn delete-btn"
                    data-id="${report.id}">

                        Delete

                    </button>

                </div>

            </div>

        `;
    });

    const deleteButtons =
    document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {

        button.addEventListener(
            "click",

            async () => {

                const confirmDelete =
                confirm("Delete this report?");

                if(!confirmDelete) return;

                const reportId =
                button.dataset.id;

                const { error } =
                await supabase
                    .from("Reports")
                    .delete()
                    .eq("id", reportId);

                if(error){

                    console.log(error);

                } else {

                    loadReports();
                }
            }
        );
    });
}

loadReports();

searchInput.addEventListener("input", () => {

    const searchText =
    searchInput.value.toLowerCase();

    const filteredReports =
    allReports.filter(report =>

        report.brand
        .toLowerCase()
        .includes(searchText)

        ||

        report.model
        .toLowerCase()
        .includes(searchText)
    );

    displayReports(filteredReports);

});