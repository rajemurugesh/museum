import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from "i18next-http-backend";

const apiKey = "6oMWNvTW5fFYQ8IKBztixg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;


i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","de","ar", "hi"],
    
    backend: {
      loadPath: loadPath
        }
    });

    export default i18n;