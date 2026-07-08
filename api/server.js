
const express = require("express");
const cors = require("cors");
const carDatabase = require("../data/carDatabase");
const carRoutes = require("./routes/carRoutes");
const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use("/", carRoutes);
app.use("/", analyzeRoutes);

app.get("/", (req, res) => {
  res.send("TruWheels API is running!");
});

app.get("/cars", (req, res) => {
  res.json(carDatabase);
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});