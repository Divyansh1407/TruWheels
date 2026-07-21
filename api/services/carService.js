const supabase = require("../config/supabase");
const getBrands = async () => {

    const { data, error } = await supabase
        .from("brands")
        .select("name")
        .order("name");

    if (error) {
        console.error(error);
        return [];
    }

    return data.map(brand => brand.name);

};

const getModels = async (brand) => {

    // Find brand
    const { data: brandData, error: brandError } = await supabase
        .from("brands")
        .select("id")
        .eq("name", brand)
        .single();

    if (brandError || !brandData) {
        return null;
    }

    // Fetch models
    const { data: models, error } = await supabase
        .from("cars")
        .select("model")
        .eq("brand_id", brandData.id)
        .order("model");

    if (error) {
        console.error(error);
        return null;
    }

    return models.map(car => car.model);

};

const getVehicle = async (brand, model) => {

    // Get Brand
    const { data: brandData, error: brandError } = await supabase
        .from("brands")
        .select("*")
        .eq("name", brand)
        .single();

    if (brandError || !brandData) {
        return null;
    }

    // Get Car
    const { data: car, error: carError } = await supabase
        .from("cars")
        .select("*")
        .eq("brand_id", brandData.id)
        .eq("model", model)
        .single();

    if (carError || !car) {
        return null;
    }

    // Get Intelligence
    const { data: intelligence, error: intelligenceError } = await supabase
        .from("car_intelligence")
        .select("*")
        .eq("car_id", car.id)
        .single();

    if (intelligenceError || !intelligence) {
        return null;
    }

    // Get Price Records
    const { data: prices, error: priceError } = await supabase
        .from("car_prices")
        .select("*")
        .eq("car_id", car.id);

    if (priceError) {
        return null;
    }

    // Convert yearly prices into old JS format
    const priceData = {};

    prices.forEach(price => {

        priceData[String(price.year)] = {

            min: price.market_min,
            avg: price.market_avg,
            max: price.market_max

        };

    });

    return {

        brandData: {

            brandReliability: Number(brandData.brand_reliability)

        },

        carData: {

            reliability: Number(intelligence.reliability),

            maintenance: intelligence.maintenance,

            kmTolerance: Number(intelligence.km_tolerance),

            automaticType: intelligence.automatic_type,

            petrolCharacter: intelligence.petrol_character,

            dieselCharacter: intelligence.diesel_character,

            cngCharacter: intelligence.cng_character,

            turboCharacter: intelligence.turbo_character,

            engineCharacter: intelligence.engine_character,

            engineConfidence: Number(intelligence.engine_confidence),

            highwayConfidence: Number(intelligence.highway_confidence),

            cityConfidence: Number(intelligence.city_confidence),

            turboRisk: Number(intelligence.turbo_risk),

            agingBehavior: intelligence.aging_behavior,

            priceData

        }

    };

};

const getAllCars = async () => {

    const { data, error } = await supabase
        .from("cars")
        .select(`
            model,
            brands(name)
        `);

    if(error){
        console.error(error);
        return [];
    }

    return data.map(car => ({
        brand: car.brands.name,
        model: car.model
    }));
};

module.exports = {
  getBrands,
  getModels,
  getVehicle,
  getAllCars
};