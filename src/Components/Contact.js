import React from 'react'
import {useTranslation} from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
        <h1>{t("contact ")}</h1>
        <h1>{t("i18next")}</h1>
        <p>{t("description")}</p>
    </div>
  )
}

export default Contact