import "./App.css";

import { I18nextProvider } from "react-i18next";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Error from "./Components/Error";
import i18n from "./i18n";

function App() {
  return(
    <I18nextProvider i18n={i18n}>
    <Header />
    <RouterProvider router={router}/>
    
    </I18nextProvider>
  );
  
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error/>}/>

    </Route>
  )
)





export default App;
