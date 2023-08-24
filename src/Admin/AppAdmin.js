import React from "react";
import {Routes, Route } from "react-router-dom";
import AdminHeader from "./Components/AdminHeader";
import FormDetails from "./Containers/FormDetails";
import AccessDenied from "./Containers/AccessDenied";
// import Dashboard from "./Containers/Dashboard";

const ROLES = {
  ADMIN1: "admin1",
  ADMIN2: "admin2",
};

const AppAdmin = () => {
  const userRole = "admin1";
  return (
    <div>
    <AdminHeader />
    <Routes>
        <Route
          path="/"
          element={
            userRole === ROLES.ADMIN1 ? <FormDetails adminType={ROLES.ADMIN1} /> : <AccessDenied />
          }
        />
        <Route
          path="/settings"
          element={
            userRole === ROLES.ADMIN2 ? <FormDetails adminType={ROLES.ADMIN2} /> : <AccessDenied />
          }
        />
        </Routes>
    </div>
      
    
  );
};

export default AppAdmin;
