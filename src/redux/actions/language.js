import { SET_LANGUAGE } from "../types";

const setLanguage = (lang) => {
  return {
    type: SET_LANGUAGE,
    lang,
  };
};

export { setLanguage };
