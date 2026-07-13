require("dotenv").config();
const express = require("express");
const cors = require("cors");

const carRoutes = require("./routes/carRoutes");
const analyzeRoutes = require("./routes/analyzeRoutes");
const inspectionRoutes = require("./routes/inspectionRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/", carRoutes);
app.use("/", analyzeRoutes);
app.use("/", inspectionRoutes);

app.get("/", (req, res) => {
  res.send("TruWheels API is running!");
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});