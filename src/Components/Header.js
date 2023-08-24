import React from 'react'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <img src="SMDlogo.jpg" alt="logo"/>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
       
        
         
            <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
        <option value="ar">Arabic</option>
            </select>
            
         
      
        </div>
        
    

</nav>



/* <div className="header">
      <nav>
        <ul>
          <li>{t('nav.home')}</li>
          <li>{t('nav.about')}</li>
          <li>{t('nav.contact')}</li>
        </ul>
      </nav>
      <div className="language-switch">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="de">German</option>
        </select>
      </div>
</div> */
  )
}

export default Header;