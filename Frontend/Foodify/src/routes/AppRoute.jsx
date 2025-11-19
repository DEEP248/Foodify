import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegister from "../pages/auth/UserRegister";
import ChooseRegister from "../pages/auth/ChooseRegister";
import UserLogin from "../pages/auth/UserLogin";
import FoodPartnerRegister from "../pages/auth/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/auth/FoodPartnerLogin";
import Home from "../pages/general/Home";
import CreateFoodPartner from "../pages/foodpartner/CreateFoodPartner";
import Saved from "../pages/general/Saved";
import Profile from "../pages/foodpartner/Profile";
import BottomNav from "../components/BottomNav";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<ChooseRegister />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/foodpartner/register" element={<FoodPartnerRegister />} />
      <Route path="/foodpartner/login" element={<FoodPartnerLogin />} />
      <Route
        path="/"
        element={
          <>
            <Home />
            <BottomNav />
          </>
        }
      />
      <Route path="/create-food" element={<CreateFoodPartner />} />
      <Route
        path="/saved"
        element={
          <>
            <Saved />
            <BottomNav />
          </>
        }
      />
      <Route path="/foodpartner/:id" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
