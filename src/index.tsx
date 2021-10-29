import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import content_cn from "./i18n/cn/content.json";
import content_en from "./i18n/en/content.json";
import { Suspense } from "react";
import "@fontsource/roboto";

//import Amplify from "aws-amplify";
//import awsConfig from "./api/aws-amplify";
//Amplify.configure(awsConfig);

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      content: content_en, // 'common' is our custom namespace
    },
    cn: {
      content: content_cn,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
