require("dotenv").config();

const supabase = require("../config/supabase");
const carDatabase = require("../data/carDatabase");

// ----------------------------
// Migrate Brands
// ----------------------------
async function migrateBrands() {
    console.log("🚗 Migrating Brands...\n");

    for (const brandName of Object.keys(carDatabase)) {

        const brand = carDatabase[brandName];

        const { error } = await supabase
            .from("brands")
            .insert({
                name: brandName,
                brand_reliability: brand.brandReliability
            });

        if (error && !error.message.includes("duplicate")) {
            console.error(`❌ ${brandName}: ${error.message}`);
        } else {
            console.log(`✅ ${brandName}`);
        }
    }

    console.log("\n🎉 Brand Migration Complete!\n");
}

// ----------------------------
// Migrate Cars
// ----------------------------
async function migrateCars() {

    console.log("🚗 Migrating Cars...\n");

    // Fetch all brands from database
    const { data: brands, error: brandError } = await supabase
    .from("brands")
    .select("*");

    if (brandError) {
        console.error(brandError);
        return;
    }

    if (brandError) {
        console.error(brandError);
        return;
    }

    const brandMap = {};

    brands.forEach(brand => {
        brandMap[brand.name] = brand.id;
    });

    for (const brandName of Object.keys(carDatabase)) {

        const cars = carDatabase[brandName].cars;

        for (const modelName of Object.keys(cars)) {

            const { error } = await supabase
                .from("cars")
                .insert({
                    brand_id: brandMap[brandName],
                    model: modelName
                });

            if (error && !error.message.includes("duplicate")) {
                console.error(`❌ ${brandName} ${modelName}: ${error.message}`);
            } else {
                console.log(`✅ ${brandName} ${modelName}`);
            }
        }
    }

    console.log("\n🎉 Car Migration Complete!");
}

    // ----------------------------
    // Migrate Car Intelligence
    // ----------------------------
    async function migrateIntelligence() {

        console.log("\n🧠 Migrating Car Intelligence...\n");

        // Fetch all cars from database
        const { data: cars, error } = await supabase
            .from("cars")
            .select("*");

        if (error) {
            console.error(error);
            return;
        }

        // Create lookup map
        const carMap = {};

        cars.forEach(car => {
            carMap[`${car.brand_id}_${car.model}`] = car.id;
        });

        // Fetch brands
        const { data: brands } = await supabase
            .from("brands")
            .select("*");

        const brandMap = {};

        brands.forEach(brand => {
            brandMap[brand.name] = brand.id;
        });

        for (const brandName of Object.keys(carDatabase)) {

            const brandId = brandMap[brandName];

            for (const modelName of Object.keys(carDatabase[brandName].cars)) {

                const vehicle = carDatabase[brandName].cars[modelName];

                const carId = carMap[`${brandId}_${modelName}`];

                if (!carId) {
                    console.log(`❌ Car not found: ${brandName} ${modelName}`);
                    continue;
                }

                const { error } = await supabase
                    .from("car_intelligence")
                    .insert({

                        car_id: carId,

                        reliability: vehicle.reliability,

                        maintenance: vehicle.maintenance,

                        km_tolerance: vehicle.kmTolerance,

                        automatic_type: vehicle.automaticType ?? null,

                        petrol_character: vehicle.petrolCharacter ?? null,

                        diesel_character: vehicle.dieselCharacter ?? null,

                        cng_character: vehicle.cngCharacter ?? null,

                        turbo_character: vehicle.turboCharacter ?? null,

                        engine_character: vehicle.engineCharacter ?? null,

                        engine_confidence: vehicle.engineConfidence,

                        highway_confidence: vehicle.highwayConfidence,

                        city_confidence: vehicle.cityConfidence,

                        turbo_risk: vehicle.turboRisk,

                        aging_behavior: vehicle.agingBehavior

                    });

                if (error && !error.message.includes("duplicate")) {

                    console.log(`❌ ${brandName} ${modelName}`);

                    console.log(error.message);

                } else {

                    console.log(`✅ ${brandName} ${modelName}`);

                }

            }

        }

        console.log("\n🎉 Intelligence Migration Complete!");

    }

    // ----------------------------
    // Migrate Car Prices
    // ----------------------------
    async function migratePrices() {

        console.log("\n💰 Migrating Car Prices...\n");

        // Fetch brands
        const { data: brands } = await supabase
            .from("brands")
            .select("*");

        const brandMap = {};

        brands.forEach(brand => {
            brandMap[brand.name] = brand.id;
        });

        // Fetch cars
        const { data: cars } = await supabase
            .from("cars")
            .select("*");

        const carMap = {};

        cars.forEach(car => {
            carMap[`${car.brand_id}_${car.model}`] = car.id;
        });

        let inserted = 0;

        for (const brandName of Object.keys(carDatabase)) {

            const brandId = brandMap[brandName];

            for (const modelName of Object.keys(carDatabase[brandName].cars)) {

                const vehicle = carDatabase[brandName].cars[modelName];

                if (!vehicle.priceData)
                    continue;

                const carId = carMap[`${brandId}_${modelName}`];

                if (!carId)
                    continue;

                for (const year of Object.keys(vehicle.priceData)) {

                    const price = vehicle.priceData[year];

                    const { error } = await supabase
                    .from("car_prices")
                    .upsert(
                        {
                            car_id: carId,
                            year: Number(year),
                            market_min: price.min,
                            market_avg: price.avg,
                            market_max: price.max
                        },
                        {
                            onConflict: "car_id,year"
                        }
                    );

                    if (error && !error.message.includes("duplicate")) {

                        console.log(`❌ ${brandName} ${modelName} ${year}`);

                        console.log(error.message);

                    } else {

                        inserted++;

                        console.log(`✅ ${brandName} ${modelName} ${year}`);

                    }

                }

            }

        }

        console.log(`\n🎉 ${inserted} Price Records Imported!`);

    }

// ----------------------------
// Run
// ----------------------------
(async () => {

    // Already done
    // await migrateBrands();

    //await migrateCars();

    //await migrateIntelligence();

    await migratePrices();


})();

