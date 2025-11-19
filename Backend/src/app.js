//create server
const express = require("express");
const cookieparser = require("cookie-parser");
const authRoutes = require("../src/routes/auth.routes");
const foodRoutes = require("../src/routes/food.routes");
const foodPartnerRoutes = require("../src/routes/food-partner.routes");
const cors = require("cors");
const app = express();
app.use(cookieparser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//dummy route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use('/api/foodpartner', foodPartnerRoutes);

module.exports = app;
