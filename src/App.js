import "./App.css";
import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Error from "./Components/Error";
import i18n from "./i18n";
import AppAdmin from "./Admin/AppAdmin";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
       <Header />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/admin/*" element={<AppAdmin />} />
        {/* Add any additional routes as needed */}
      </Routes>
    </I18nextProvider>
  );
}
export default App;
