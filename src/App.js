import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { I18nextProvider } from "react-i18next";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Error from "./Components/Error";
import i18n from "./i18n";
import AppAdmin from "./Admin/AppAdmin";

export const ThemeContext = createContext(null);

function App() {
  const[theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
    <I18nextProvider i18n={i18n}>
    <div className="App" id={theme}>
       <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/admin/*" element={<AppAdmin />} />
        {/* Add any additional routes as needed */}
      </Routes>
      <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        </div>
    </I18nextProvider>
  
    </ThemeContext.Provider>
  );
}
export default App;
