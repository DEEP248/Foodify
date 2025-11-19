const express = require('express');
const foodPartnerController = require("../controllers/food-partner.controller");
const authUserMidleware = require("../middleware/auth.middleware");

const router = express.Router();


router.get("/:id",
    authUserMidleware.authUserMidleware,
    foodPartnerController.getFoodPartnerById)

module.exports = router;