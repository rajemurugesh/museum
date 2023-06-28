import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";

// import Headerbar from './Components/Headerbar';
// import Body from './Components/Body';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("editLine")}</p>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option>Choose Language</option>
          <option value="ar">Arabic</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("welcome")}
          <br />
          {t("goodbye")}
        </a>
      </header>
    </div>
  );
}

export default App;
