const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./db");
const userRoutes = require("./userRoutes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected to Vodafone Idea Foundation DB");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Vodafone Idea Foundation server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
