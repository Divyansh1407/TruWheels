const calculateInspectionScore = (selectedIssues) => {

    const severityDeductions = {

// Exterior

    "Single Panel Repaint": 2,
    "Multiple Panels Repainted": 4,
    "Signs of Major Accident Repair": 8,

    "Slight Misalignment": 2,
    "Multiple Uneven Panels": 4,
    "Possible Structural Damage": 8,

    "Surface Rust": 3,
    "Rust on Multiple Panels": 5,
    "Severe Corrosion / Structural Rust": 9,

    "Minor Dent": 2,
    "Multiple Major Dents": 5,
    "Structural Damage Detected": 10,

    "Minor Crack / Fogging": 1,
    "One Unit Damaged": 3,
    "Multiple Lights Damaged / Non Functional": 5,


// Engine

    "Minor Oil Seepage": 2,
    "Visible Oil Leakage": 5,
    "Heavy Leakage / Oil Dripping": 8,

    "Minor Coolant Seepage": 2,
    "Visible Coolant Leakage": 5,
    "Major Leakage / Low Coolant Level": 8,

    "Slight Vibration at Idle": 2,
    "Noticeable Vibration While Driving": 5,
    "Severe Vibration / Engine Shaking": 9,

    "Occasional Smoke": 3,
    "Continuous White/Black Smoke": 6,
    "Dense Blue/Black Smoke": 10,


// Tyres & Suspension

    "Slight Uneven Wear": 2,
    "Noticeable Uneven Wear": 4,
    "Severe / Abnormal Tyre Wear": 6,

    "Tyres Near End of Life": 3,
    "Immediate Replacement Recommended": 5,
    "Unsafe Tyres / Bald Tyres": 8,

    "Occasional Minor Noise": 2,
    "Frequent Noise Over Bumps": 4,
    "Loud Knocking / Suspension Failure Signs": 8,

    "Slight Pulling": 2,
    "Noticeable Pulling During Driving": 5,
    "Severe Pulling / Poor Vehicle Control": 8,


// Interior

    "Single Warning Light Active": 3,
    "Multiple Warning Lights Active": 5,
    "Critical Warning Lights (Engine/Airbag/ABS)": 9,

    "Slightly Reduced Cooling": 1,
    "Poor Cooling Performance": 3,
    "AC Not Working": 5,

    "Minor Feature Malfunction": 2,
    "Multiple Electrical Issues": 5,
    "Major Electrical System Failure": 8,


 // Test Drive

    "Slight Clutch Slip": 3,
    "Noticeable Clutch Slip": 5,
    "Severe Slip / Immediate Replacement Required": 8,

    "Occasional Hard Shifts": 2,
    "Frequent Rough Gear Shifts": 5,
    "Severe Gearbox Issues / Grinding Noise": 9,

    "Slightly Reduced Braking": 3,
    "Noticeably Weak Braking": 6,
    "Unsafe Braking Performance": 10,

    "Frequent Noise During Driving": 4,
    "Loud Knocking / Major Mechanical Noise": 8

    };

    const categoryWeights = {

    exterior: 20,
    engine: 30,
    tyres: 15,
    interior: 10,
    testDrive: 25

};

    const severityCategory = {

        // Exterior

        "Single Panel Repaint": "exterior",
        "Multiple Panels Repainted": "exterior",
        "Signs of Major Accident Repair": "exterior",

        "Slight Misalignment": "exterior",
        "Multiple Uneven Panels": "exterior",
        "Possible Structural Damage": "exterior",

        "Surface Rust": "exterior",
        "Rust on Multiple Panels": "exterior",
        "Severe Corrosion / Structural Rust": "exterior",

        "Minor Dent": "exterior",
        "Multiple Major Dents": "exterior",
        "Structural Damage Detected": "exterior",

        "Minor Crack / Fogging": "exterior",
        "One Unit Damaged": "exterior",
        "Multiple Lights Damaged / Non Functional": "exterior",

        // Engine

        "Minor Oil Seepage": "engine",
        "Visible Oil Leakage": "engine",
        "Heavy Leakage / Oil Dripping": "engine",

        "Minor Coolant Seepage": "engine",
        "Visible Coolant Leakage": "engine",
        "Major Leakage / Low Coolant Level": "engine",

        "Slight Vibration at Idle": "engine",
        "Noticeable Vibration While Driving": "engine",
        "Severe Vibration / Engine Shaking": "engine",

        "Occasional Smoke": "engine",
        "Continuous White/Black Smoke": "engine",
        "Dense Blue/Black Smoke": "engine",

        // Tyres

        "Slight Uneven Wear": "tyres",
        "Noticeable Uneven Wear": "tyres",
        "Severe / Abnormal Tyre Wear": "tyres",

        "Tyres Near End of Life": "tyres",
        "Immediate Replacement Recommended": "tyres",
        "Unsafe Tyres / Bald Tyres": "tyres",

        "Occasional Minor Noise": "tyres",
        "Frequent Noise Over Bumps": "tyres",
        "Loud Knocking / Suspension Failure Signs": "tyres",

        "Slight Pulling": "tyres",
        "Noticeable Pulling During Driving": "tyres",
        "Severe Pulling / Poor Vehicle Control": "tyres",

        // Interior

        "Single Warning Light Active": "interior",
        "Multiple Warning Lights Active": "interior",
        "Critical Warning Lights (Engine/Airbag/ABS)": "interior",

        "Slightly Reduced Cooling": "interior",
        "Poor Cooling Performance": "interior",
        "AC Not Working": "interior",

        "Minor Feature Malfunction": "interior",
        "Multiple Electrical Issues": "interior",
        "Major Electrical System Failure": "interior",

        // Test Drive

        "Slight Clutch Slip": "testDrive",
        "Noticeable Clutch Slip": "testDrive",
        "Severe Slip / Immediate Replacement Required": "testDrive",

        "Occasional Hard Shifts": "testDrive",
        "Frequent Rough Gear Shifts": "testDrive",
        "Severe Gearbox Issues / Grinding Noise": "testDrive",

        "Slightly Reduced Braking": "testDrive",
        "Noticeably Weak Braking": "testDrive",
        "Unsafe Braking Performance": "testDrive",

        "Frequent Noise During Driving": "testDrive",
        "Loud Knocking / Major Mechanical Noise": "testDrive"

    };

    let categoryScores = {

    exterior: 20,
    engine: 30,
    tyres: 15,
    interior: 10,
    testDrive: 25

    };

    selectedIssues.forEach(item => {

        const deduction =
            severityDeductions[item.severity] || 0;

        const category =
            severityCategory[item.severity];

        if(category){

            categoryScores[category] -= deduction;

            if(categoryScores[category] < 0){
                categoryScores[category] = 0;
            }
        }

    });

    let score =

        categoryScores.exterior +
        categoryScores.engine +
        categoryScores.tyres +
        categoryScores.interior +
        categoryScores.testDrive;


    let verdict;
    let recommendation;

    if(score >= 85){

        verdict = "RECOMMENDED PURCHASE";

        recommendation =
        "Vehicle appears to be in excellent physical condition with minimal concerns detected during inspection.";
    }

    else if(score >= 70){

        verdict = "BUY AFTER INSPECTION";

        recommendation =
        "Vehicle appears mechanically healthy overall. Further verification of identified concerns is recommended.";
    }

    else if(score >= 50){

        verdict = "CAUTION ADVISED";

        recommendation =
        "Several concerns were identified during inspection. Additional verification and negotiation are strongly recommended.";
    }

    else{

        verdict = "AVOID PURCHASE";

        recommendation =
        "Multiple significant concerns were identified during inspection. Proceed with extreme caution before purchase.";
    }


    return {
        score,
        verdict,
        recommendation
    };

};

module.exports = {
    calculateInspectionScore
};
