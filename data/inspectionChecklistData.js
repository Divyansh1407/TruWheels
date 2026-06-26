const inspectionChecklist = [

    {
        category: "Exterior Inspection",
        icon: "🚗",

        checkpoints: [

            {
                title: "Different paint shades or repaint marks observed",

                severityOptions: [
                    "Single Panel Repaint",
                    "Multiple Panels Repainted",
                    "Signs of Major Accident Repair"
                ]
            },

            {
                title: "Uneven gaps between body panels observed",

                severityOptions: [
                    "Slight Misalignment",
                    "Multiple Uneven Panels",
                    "Possible Structural Damage"
                ]
            },

            {
                title: "Visible rust or corrosion spots observed",

                severityOptions: [
                    "Surface Rust",
                    "Rust on Multiple Panels",
                    "Severe Corrosion / Structural Rust"
                ]
            },

            {
                title: "Major dents or structural damage observed",

                severityOptions: [
                    "Minor Dent",
                    "Multiple Major Dents",
                    "Structural Damage Detected"
                ]
            },

            {
                title: "Headlights or taillights damaged",

                severityOptions: [
                    "Minor Crack / Fogging",
                    "One Unit Damaged",
                    "Multiple Lights Damaged / Non Functional"
                ]
            }

        ]
    },

    {
        category: "Engine Bay Inspection",
        icon: "🔧",

        checkpoints: [

            {
                title: "Engine oil leakage signs observed",

                severityOptions: [
                    "Minor Oil Seepage",
                    "Visible Oil Leakage",
                    "Heavy Leakage / Oil Dripping"
                ]
            },

            {
                title: "Coolant leakage signs observed",

                severityOptions: [
                    "Minor Coolant Seepage",
                    "Visible Coolant Leakage",
                    "Major Leakage / Low Coolant Level"
                ]
            },

            {
                title: "Excessive engine vibration observed",

                severityOptions: [
                    "Slight Vibration at Idle",
                    "Noticeable Vibration While Driving",
                    "Severe Vibration / Engine Shaking"
                ]
            },

            {
                title: "Excessive exhaust smoke observed",

                severityOptions: [
                    "Occasional Smoke",
                    "Continuous White/Black Smoke",
                    "Dense Blue/Black Smoke"
                ]
            }

        ]
    },

    {
        category: "Tyres & Suspension",
        icon: "🛞",

        checkpoints: [

            {
                title: "Uneven tyre wear observed",

                severityOptions: [
                    "Slight Uneven Wear",
                    "Noticeable Uneven Wear",
                    "Severe / Abnormal Tyre Wear"
                ]
            },

            {
                title: "Tyres require replacement",

                severityOptions: [
                    "Tyres Near End of Life",
                    "Immediate Replacement Recommended",
                    "Unsafe Tyres / Bald Tyres"
                ]
            },

            {
                title: "Suspension noise observed",

                severityOptions: [
                    "Occasional Minor Noise",
                    "Frequent Noise Over Bumps",
                    "Loud Knocking / Suspension Failure Signs"
                ]
            },

            {
                title: "Steering pulls to one side",

                severityOptions: [
                    "Slight Pulling",
                    "Noticeable Pulling During Driving",
                    "Severe Pulling / Poor Vehicle Control"
                ]
            }

        ]
    },

    {
        category: "Interior Inspection",
        icon: "🪑",

        checkpoints: [

            {
                title: "Dashboard warning lights remained ON",

                severityOptions: [
                    "Single Warning Light Active",
                    "Multiple Warning Lights Active",
                    "Critical Warning Lights (Engine/Airbag/ABS)"
                ]
            },

            {
                title: "AC cooling performance weak",

                severityOptions: [
                    "Slightly Reduced Cooling",
                    "Poor Cooling Performance",
                    "AC Not Working"
                ]
            },

            {
                title: "Electrical components malfunctioning",

                severityOptions: [
                    "Minor Feature Malfunction",
                    "Multiple Electrical Issues",
                    "Major Electrical System Failure"
                ]
            }

        ]
    },

    {
        category: "Test Drive Inspection",
        icon: "🛣️",

        checkpoints: [

            {
                title: "Clutch slipping observed",

                severityOptions: [
                    "Slight Clutch Slip",
                    "Noticeable Clutch Slip",
                    "Severe Slip / Immediate Replacement Required"
                ]
            },

            {
                title: "Gear shifts feel hard or rough",

                severityOptions: [
                    "Occasional Hard Shifts",
                    "Frequent Rough Gear Shifts",
                    "Severe Gearbox Issues / Grinding Noise"
                ]
            },

            {
                title: "Brake performance poor",

                severityOptions: [
                    "Slightly Reduced Braking",
                    "Noticeably Weak Braking",
                    "Unsafe Braking Performance"
                ]
            },

            {
                title: "Abnormal noises during driving",

                severityOptions: [
                    "Occasional Minor Noise",
                    "Frequent Noise During Driving",
                    "Loud Knocking / Major Mechanical Noise"
                ]
            }

        ]
    }

];