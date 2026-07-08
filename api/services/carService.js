const supabase = require("../config/supabase");
const carDatabase = require("../data/carDatabase");

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

const getCar = (brand, model) => {
  if(!carDatabase[brand] || !carDatabase[brand].cars[model]) return null;
  return carDatabase[brand].cars[model];
}

module.exports = {
  getBrands,
  getModels,
  getCar
};