function calculateInspectionScore(selectedIssues){

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

    let totalDeduction = 0;

    selectedIssues.forEach(item => {
        totalDeduction += severityDeductions[item.severity] || 0;
    });

    let score = 100 - totalDeduction;

    if(score < 0){
        score = 0;
    }


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
}