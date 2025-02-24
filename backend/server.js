const fs = require("fs");
const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

// Create logs directory if it doesn't exist
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Create a write stream for logging
const accessLogStream = fs.createWriteStream(
  path.join(logDir, "server.log"), 
  { flags: "a" }
);






const app = express();
app.use(cors());
app.use(express.json());

// Add logging middleware
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  accessLogStream.write(log);
  next();
});



app.use("/api/auth", authRoutes);

console.log("Attempting to connect to MongoDB...");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
  console.log(`Connected to database: ${mongoose.connection.db.databaseName}`);
})
.catch((err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
  console.log("\nTroubleshooting Steps:");
  console.log("1. Verify the connection string in .env file");
  console.log("2. Ensure your IP is whitelisted in MongoDB Atlas");
  console.log("3. Check database user permissions");
  console.log("4. Verify network connectivity to MongoDB Atlas");
  console.log("\nFull Error Details:");
  console.error(err);
  process.exit(1);
});



app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
