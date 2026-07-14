const inspectionGuideData = [

    {
        category: "Exterior Inspection",
        icon: "🚗",
        checkpoints: [

            {
                title: "Paint Mismatch",

                inspect:
                    "Compare the paint shade and finish across adjacent body panels.",

                importance:
                    "Paint mismatch may indicate previous accident repairs or repaint work.",

                normal:
                    "Minor repainting on a single panel due to scratches is common in used cars.",

                redFlag:
                    "Significant color differences across multiple panels should not be ignored."
            },

            {
                title: "Panel Alignment",

                inspect:
                    "Check whether gaps between doors, bonnet and boot are even.",

                importance:
                    "Uneven gaps can suggest accident damage or poor repair quality.",

                normal:
                    "Slight variations are common in older vehicles.",

                redFlag:
                    "Large uneven gaps or difficulty opening or closing doors should be investigated further."
            },

            {
                title: "Rust & Corrosion",

                inspect:
                "Inspect wheel arches, door sills, underbody and boot floor for rust spots.",

                importance:
                "Rust weakens structural integrity and can lead to expensive repairs.",

                normal:
                "Light surface rust on underbody components is common in older cars.",

                redFlag:
                "Deep rust, bubbling paint or rust around structural areas should not be ignored."
            },

            {
                title: "Dent & Scratch Inspection",

                inspect:
                "Walk around the vehicle and inspect all body panels under natural light.",

                importance:
                "Multiple dents or deep scratches may indicate poor ownership or hidden damage.",

                normal:
                "Minor scratches and stone chips are expected on used cars.",

                redFlag:
                "Large dents, cracked panels or signs of filler work require closer inspection."
            },

            {
                title: "Glass & Windshield",

                inspect:
                "Inspect windshield, windows and rear glass for cracks, chips or replacement markings.",

                importance:
                "Damaged glass affects safety and replacement costs can be significant.",

                normal:
                "Small stone chips away from driver visibility area may be acceptable.",

                redFlag:
                "Large cracks, poorly fitted glass or water leakage signs should be investigated."
            },

            {
                title: "Headlights & Tail Lamps",

                inspect:
                "Check for moisture, cracks, yellowing and ensure all lights function properly.",

                importance:
                "Lighting problems affect safety and replacement assemblies can be costly.",

                normal:
                "Slight headlight fading is common in older vehicles.",

                redFlag:
                "Water inside lamps, broken mounts or non-functioning lights require attention."
            }

        ]
    },

    {
        category: "Engine Bay Inspection",
        icon: "🔧",
        checkpoints: [

            {
                title: "Engine Oil Leakage",

                inspect:
                "Inspect the engine bay and underbody for fresh oil stains or wet surfaces.",

                importance:
                "Oil leaks may indicate neglected maintenance or expensive future repairs.",

                normal:
                "Slight sweating around older engines can be acceptable.",

                redFlag:
                "Fresh oil dripping, heavy leakage or burning oil smell should not be ignored."
            },

            {
                title: "Engine Noise",

                inspect:
                "Start the engine and listen for knocking, ticking or rattling sounds.",

                importance:
                "Abnormal noises can indicate serious internal engine problems.",

                normal:
                "Mild diesel clatter is normal in diesel vehicles.",

                redFlag:
                "Loud knocking, metallic sounds or persistent rattles require professional inspection."
            },

            {
                title: "Exhaust Smoke",

                inspect:
                "Observe exhaust smoke during cold start and acceleration.",

                importance:
                "Smoke color can reveal engine health issues.",

                normal:
                "A small amount of white vapor during cold mornings is normal.",

                redFlag:
                "Continuous blue, thick white or black smoke should not be ignored."
            },

            {
                title: "Battery Condition",

                inspect:
                "Inspect battery terminals for corrosion and check battery manufacturing date.",

                importance:
                "A weak battery can lead to starting problems.",

                normal:
                "Minor dust accumulation is normal.",

                redFlag:
                "Heavy corrosion, swollen battery case or frequent jump starts indicate replacement may be needed."
            },

            {
                title: "Fluid Levels",

                inspect:
                "Check engine oil, coolant and brake fluid levels.",

                importance:
                "Low fluid levels may indicate poor maintenance or leaks.",

                normal:
                "Minor variations in fluid levels are acceptable.",

                redFlag:
                "Very low fluid levels or contaminated fluids require investigation."
            }
        ]
    },

    {
        category: "Tyres & Suspension",
        icon: "🛞",
        checkpoints: [

            {
                title: "Tyre Tread Condition",

                inspect:
                "Inspect tread depth across all four tyres.",

                importance:
                "Tyres directly affect braking performance and safety.",

                normal:
                "Even wear across tyres is a positive sign.",

                redFlag:
                "Very low tread depth or bald tyres should be replaced immediately."
            },

            {
                title: "Uneven Tyre Wear",

                inspect:
                "Check whether tyres are worn unevenly on one side.",

                importance:
                "Uneven wear may indicate alignment or suspension issues.",

                normal:
                "Minor wear differences are expected over time.",

                redFlag:
                "Severe one-sided wear should not be ignored."
            },

            {
                title: "Suspension Noise",

                inspect:
                "Drive over speed breakers and rough roads while listening for noises.",

                importance:
                "Suspension repairs can be expensive.",

                normal:
                "Minor thuds on bad roads may occur in older cars.",

                redFlag:
                "Repeated clunking or knocking sounds require inspection."
            },

            {
                title: "Tyre Manufacturing Date",

                inspect:
                "Check the manufacturing year on the tyre sidewall.",

                importance:
                "Old tyres lose grip even if tread appears good.",

                normal:
                "Tyres within 5 years are generally acceptable.",

                redFlag:
                "Tyres older than 6 years should be replaced."
            }
        ]
    },

    {
        category: "Interior Inspection",
        icon: "🪑",
        checkpoints: [

            {
                title: "Seat Condition",

                inspect:
                "Inspect seats for tears, excessive wear and repairs.",

                importance:
                "Seat condition often reflects overall ownership quality.",

                normal:
                "Minor wear is expected in used vehicles.",

                redFlag:
                "Severely worn seats on low mileage cars may indicate odometer tampering."
            },

            {
                title: "AC Performance",

                inspect:
                "Run the AC and verify cooling performance.",

                importance:
                "AC repairs can be expensive in modern vehicles.",

                normal:
                "Cooling should begin within a few minutes.",

                redFlag:
                "Weak cooling, unusual smells or noises require inspection."
            },

            {
                title: "Electrical Features",

                inspect:
                "Test power windows, infotainment system, lights and other electronics.",

                importance:
                "Electrical issues can become difficult and costly to diagnose.",

                normal:
                "Minor infotainment lag is acceptable.",

                redFlag:
                "Multiple electrical failures should not be ignored."
            },

            {
                title: "Dashboard Warning Lights",

                inspect:
                "Turn ignition ON and ensure all warning lights behave normally.",

                importance:
                "Warning lights may reveal hidden mechanical problems.",

                normal:
                "Lights should disappear shortly after engine start.",

                redFlag:
                "Persistent engine, ABS or airbag lights require immediate attention."
            }
        ]
    },

    {
        category: "Test Drive Inspection",
        icon: "🛣️",
        checkpoints: [

            {
                title: "Clutch Performance",

                inspect:
                "Check clutch feel during acceleration and gear shifts.",

                importance:
                "Clutch replacement can be costly.",

                normal:
                "Smooth engagement and predictable bite point are desirable.",

                redFlag:
                "Slipping clutch or hard gear shifts indicate problems."
            },

            {
                title: "Gearbox Operation",

                inspect:
                "Shift through all gears during the test drive.",

                importance:
                "Transmission repairs are among the most expensive repairs.",

                normal:
                "Gear shifts should feel smooth.",

                redFlag:
                "Grinding, jerks or delayed shifts should not be ignored."
            },

            {
                title: "Brake Performance",

                inspect:
                "Perform moderate braking in a safe area.",

                importance:
                "Brakes are critical for safety.",

                normal:
                "Vehicle should stop confidently without pulling.",

                redFlag:
                "Vibration, noise or pulling under braking requires attention."
            },

            {
                title: "Steering Response",

                inspect:
                "Check steering feel while driving at different speeds.",

                importance:
                "Poor steering response affects control and safety.",

                normal:
                "Steering should feel predictable and centered.",

                redFlag:
                "Excessive play, vibrations or pulling require investigation."
            },

            {
                title: "Highway Stability",

                inspect:
                "Drive at moderate speeds and observe vehicle stability.",

                importance:
                "Poor stability may indicate alignment or suspension issues.",

                normal:
                "Vehicle should track straight without constant correction.",

                redFlag:
                "Wandering or excessive vibrations should not be ignored."
            }
        ]
    }

];