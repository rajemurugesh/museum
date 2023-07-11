import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from '../i18n' // Import your i18n configuration file

const Home = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language).then(()=>{
        navigate('/about');
    });
    
  };

  return (
    <div>
      <h4 className="text-center">Welcome to our Museum</h4>
      <hr />
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-secondary" type="button" onClick={() => handleChangeLanguage('en')}>
          English
        </button>
        <button className="btn btn-secondary" type="button" onClick={() => handleChangeLanguage('ar')}>
          Arabic
        </button>
      </div>
    </div>
  );
};

const HomeWithI18nProvider = () => {
    // Set the language before rendering the application
    i18n.changeLanguage('en');
  
    return (
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );
  };
  


export default HomeWithI18nProvider;