const inspectionService = require("./inspectionService");

const analyzeInspection = (selectedIssues) => {

    return inspectionService.calculateInspectionScore(
        selectedIssues
    );

};

module.exports = {
    analyzeInspection
};