const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");
const driverAuthMiddleware = require("../middleware/driverAuthMiddleware");


router.get("/", driverController.getDriverLogin);
router.post("/login_process", driverController.loginDriver);
router.get("/dashboard", driverAuthMiddleware.isDriverLoggedIn, driverController.getDriverDashboard);
router.get("/pending-requests", driverAuthMiddleware.isDriverLoggedIn, driverController.getPendingRequests);
router.get("/resolve-request", driverAuthMiddleware.isDriverLoggedIn, driverController.resolveRequest);
router.get("/reject-request", driverAuthMiddleware.isDriverLoggedIn, driverController.rejectRequest);
router.get("/history", driverAuthMiddleware.isDriverLoggedIn, driverController.getRequestHistory);
router.get("/logout", driverController.logoutDriver);

module.exports = router;