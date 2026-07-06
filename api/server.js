const express = require("express");
const carDatabase = require("../data/carDatabase");
const carRoutes = require("./routes/carRoutes");

const app = express();
const PORT = 3000;
app.use("/", carRoutes);

app.get("/", (req, res) => {
  res.send("TruWheels API is running!");
});

app.get("/cars", (req, res) => {
  res.json(carDatabase);
});

app.get("/brands", (req, res) => {
  res.json(Object.keys(carDatabase));
});

app.get("/cars/:brand", (req, res) => {
  const brand = req.params.brand;

  if (!carDatabase[brand]) {
    return res.status(404).json({
      error: "Brand not found"
    });
  }

  res.json(carDatabase[brand]);
});

app.get("/car/:brand/:model", (req, res) => {

  const brand = req.params.brand;
  const model = req.params.model;

  if (
    !carDatabase[brand] ||
    !carDatabase[brand].cars[model]
  ) {
    return res.status(404).json({
      error: "Car not found"
    });
  }

  res.json(
    carDatabase[brand].cars[model]
  );

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});