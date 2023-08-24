import React from 'react'
import {useTranslation} from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
        <h1>{t("Contact us page")}</h1>
        <h1>{t("What is i18next?")}</h1>
        <p>{t("i18next is an internationalization framework that has been written for JavaScript. It provides a complete method for product localization as well as the other standard i18n features.")}
             </p>
    </div>
  )
}

export default Contact