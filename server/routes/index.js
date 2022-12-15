// connect to the main route
const userRoutes = require("./users.Routes");
const leadsRoutes = require("./leads.Routes");
// middleware to each main route

module.exports = {
  userRoutes,
  leadsRoutes,
};
