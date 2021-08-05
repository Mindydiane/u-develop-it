
const express = require("express");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use("/api", apiRoutes);

// Default response for any other request (Not Found), catchall route
app.use((req, res) => {
  res.status(404).end();
});

//function that will start the Express.js server on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
