const carDatabase = require("../../data/carDatabase");

const getBrands = () => {
  return Object.keys(carDatabase);
};

const getModels = (brand) => {
  if (!carDatabase[brand]) return null;
  return Object.keys(carDatabase[brand].cars);
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