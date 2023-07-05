import React from 'react'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img src="SMDlogo.jpg" alt="logo"/>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
       
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            select
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">english</a></li>
            <li><a class="dropdown-item" href="#">Arabic</a></li>
            <li><a class="dropdown-item" href="#">Russian</a></li>
         
        </ul>
        </div>
        
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