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
// Run
// ----------------------------
(async () => {

    // Already done
    // await migrateBrands();

    await migrateCars();

})();