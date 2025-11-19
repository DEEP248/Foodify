const userModel = require("../models/user.models");
const foodPartnerModel = require("../models/foodpartner.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================= USER REGISTER ============================
async function registerUser(req, res) {
  const { fullname, email, password } = req.body;

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      message: "User Already Exists.",
    }); 
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

// ======================= USER LOGIN ================================
async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(200).json({
    message: "User Login Successfully",
    user: {
      _id: user._id,
      email: user.email,
    },
  });
}

// ======================= FOOD PARTNER REGISTER ======================
async function registerFoodPartner(req, res) {
  const { name, email, password, phone, address, contactName } = req.body;

  const isFoodPartnerExist = await foodPartnerModel.findOne({ email });

  // FIXED CONDITION
  if (isFoodPartnerExist) {
    return res.status(400).json({
      message: "Food Partner Already Exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    phone,
    address,
    contactName,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "Food Partner Registered Successfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
      phone: foodPartner.phone,
      address: foodPartner.address,
      contactName: foodPartner.contactName,
    },
  });
}

// ======================= FOOD PARTNER LOGIN =========================
async function loginFoodPartner(req, res) {
  const { email, password } = req.body;

  const foodPartner = await foodPartnerModel.findOne({ email });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(200).json({
    message: "Food Partner Login Successfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
    },
  });
}

// ======================= LOGOUT =====================================
function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "User Logout Successfully",
  });
}

function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food Partner Logout Successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
