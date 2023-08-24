import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppAdmin from "./Admin/AppAdmin";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import FormDetails from "./Admin/Containers/FormDetails";
import AccessDenied from "./Admin/Containers/AccessDenied";

import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./i18n";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* Public-Facing Web App */}
      <Route path="*" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        {/* Other routes for different pages of the public-facing app can be added here */}
        
        {/* Admin Dashboard */}
        <Route path="/admin/*" element={<AppAdmin />} />
        {/* Other admin-related routes can be added here */}

        {/* Add routes for FormDetails and AccessDenied */}
        <Route path="/admin/form-details" element={<FormDetails adminType="admin1" />} />
        <Route path="/admin/access-denied" element={<AccessDenied />} />
      
        {/* <Route  path="/admin" element={<Dashboard />} /> */}

        {/* Other routes for different admin pages can be added here */}
    </Routes>
    
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
