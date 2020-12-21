import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./constants";
import messages from "./messages/index";

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
