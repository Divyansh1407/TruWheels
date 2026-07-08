const inspectionAnalyzeService = require("../services/inspectionAnalyzeService");

const analyzeInspection = (req, res) => {

    const result =
        inspectionAnalyzeService.analyzeInspection(
            req.body.selectedIssues
        );

    res.json(result);

};

module.exports = {
    analyzeInspection
};