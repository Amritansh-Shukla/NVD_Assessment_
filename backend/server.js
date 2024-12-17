const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cveRoutes = require("./routes/cveRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api/cves", cveRoutes);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
