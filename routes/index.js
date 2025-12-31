const express = require("express");
const router = express.Router();

const adminRoutes = require("./adminRoutes");
const driverRoutes = require("./driverRoutes");
const userRoutes = require("./userRoutes");


router.use("/", userRoutes);
router.use("/admin", adminRoutes);
router.use("/driver", driverRoutes);

module.exports = router;