import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const images = [
  {
    id: 1,
    src: 'Assets/sma1.jpg',
    alt: 'Image 1',
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center">
      <div className="col-2">
        <div className='row'>
        <h4 className="px-1">{t('Select Museum:')}</h4>
        <div className="card">
          <Link to="/contact">
            <img
              src="Assets/sma1.jpg"
              className="card-img-top img-fluid img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Sharjah Museum of Islamic Civilization</p>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/contact">
            <img
              src="Assets/sma1.jpg"
              className="card-img-top img-fluid img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Sharjah Museum of Islamic Civilization</p>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;