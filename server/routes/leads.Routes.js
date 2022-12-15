const express = require("express"); // require express
const router = express.Router(); // create express router

// Connecting to the controller
const { createLeads, getAllLeads } = require("../controllers/leads.Controller");

// Middleware to upload files
const upload = require("../middleware/Multer/upload.middleware");
const getUserFromToken = require("../middleware/getUserFromToken.middleware");

// Routes

router.post("/create", getUserFromToken, upload.single("file"), createLeads);
// router.get("/", getUserFromToken, getAllLeads);
router.get("/", getAllLeads);
module.exports = router;
