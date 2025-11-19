const express = require("express");
const multer = require("multer");
const foodController = require("../controllers/food.controllers");
const authFoodPartnerMidleware = require("../middleware/auth.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/",
  authFoodPartnerMidleware.authFoodPartnerMidleware,
  upload.single("video"),
  foodController.createFood
);

router.get(
  "/",
  authFoodPartnerMidleware.authUserMidleware,
  foodController.getAllFoods
);

router.post("/like", authMiddleware.authUserMidleware, foodController.likeFood);

router.post("/save", authMiddleware.authUserMidleware, foodController.saveFood);

router.get(
  "/save",
  authMiddleware.authUserMidleware,
  foodController.getSaveFood
);

module.exports = router;
