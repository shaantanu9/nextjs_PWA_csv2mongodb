const express = require("express"); // require express
const app = express(); // create express app
const connect = require("./config/db"); // require database connection
app.use(express.json()); // parse requests of content-type - application/json
require("dotenv").config(); // require dotenv to use environment variables

// using morgan to log the requests
const morgan = require("morgan");
// app.use(morgan("dev")); // dev is a format for morgan


// connect to the main route
const { userRoutes, leadsRoutes } = require("./routes");

// cors is a middleware to allow cross origin resource sharing
const cors = require("cors");
app.use(cors());

// middleware to each main route

app.use("/users", userRoutes);
app.use("/leads", leadsRoutes);



// middleware to handle 404 error
// app.use((req, res, next) => {
//   res.status(404).send("404 Not Found");
// });

//Port number
PORT = process.env.PORT || 3000;

// app.listen is a method to start the server
app.listen(PORT, async () => {
  await connect();
  console.log(`listening on port ${PORT}`);
});
