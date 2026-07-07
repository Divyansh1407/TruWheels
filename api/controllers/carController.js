const carService = require("../services/carService");

const getBrands = (req, res) => {
  const brands = carService.getBrands();
  res.json(brands);
};

const getModels = (req, res) => {
  const { brand } = req.params;

  const models = carService.getModels(brand);

  if (!models) {
    return res.status(404).json({
      error: "Brand not found"
    });
  }

  res.json(models);
};

const getCar = (req, res) => {
  const { brand, model } = req.params;

  const car = carService.getCar(brand, model);

  if (!car) {
    return res.status(404).json({
      error: "Car not found"
    });
  }

  res.json(car);
};

module.exports = {
  getBrands,
  getModels,
  getCar
};