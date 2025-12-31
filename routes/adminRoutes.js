const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/adminAuthMiddleware");
const requestMiddleware = require("../middleware/requestMiddleware");
let session = require("express-session");


router.use(session({
    secret: "This is session secret",
    resave: false,
    saveUninitialized: false
}));


router.get("/", adminController.redirectToLogin);
router.get("/login", adminController.getLoginPage);
router.post("/login_process", adminController.loginAdmin);
router.get("/dashboard", authMiddleware.isAdminLoggedIn, adminController.getAdminDashboard);
router.get("/all-requests", authMiddleware.isAdminLoggedIn, adminController.getAllRequests);
router.get("/assign-driver", authMiddleware.isAdminLoggedIn, requestMiddleware.isRequestRejected, adminController.assignDriver);
router.get("/unassign-driver", authMiddleware.isAdminLoggedIn, requestMiddleware.isRequestRejected, adminController.unassignDriver);
router.get("/reject-request", authMiddleware.isAdminLoggedIn, requestMiddleware.isRequestRejected, adminController.rejectRequest);
router.get("/create-driver", authMiddleware.isAdminLoggedIn, adminController.getCreateDriverPage);
router.post("/create-driver", authMiddleware.isAdminLoggedIn, adminController.createDriver);
router.get("/all-drivers", authMiddleware.isAdminLoggedIn, adminController.getAllDrivers);
router.get("/delete-driver", authMiddleware.isAdminLoggedIn, adminController.deleteDriver);
router.get("/logout", adminController.logoutAdmin);


module.exports = router;